import './styles/App.css'
import SignupForm from './components/forms/signup'
import LoginForm from './components/forms/login'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLogin, postUser } from './services/api'
import { getUser, setFetchedUser, clearUser } from './redux/actions/userActions'
import { setToken, clearToken, getToken } from './services/localstorage'
import NavBar from './components/nav/navbar'
import { useEffect } from 'react'
import PostContainer from './containers/postsContainer'
import PostShowContainer from './containers/postShowContainer'
import BoardsContainer from './containers/boardsContainer'
import NoMatch from './components/noMatch'

function App() {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const setUserFromToken = () => dispatch(getUser())
  const setUser = username => dispatch(setFetchedUser(username))

  const noUser = () => user === "" ? true : false
  const userExists = () => user !== "" ? true : false

  const checkAuthorization = () => {
    if (getToken() && noUser()) {
      setUserFromToken()  
    } 
  }

  const handleSignup = newUser => {
    postUser(newUser)
    .then(data => {
      if (data.error) {
        alert(data.messages)
      }
      
      if (data.jwt) {
        setToken(data.jwt)
        setUser(data.user.username)
      }
    })
  }

  const handleLogin = credentials => {
    fetchLogin(credentials)
    .then(data => {
      if (data.error) {
        alert(data.error) 
      }

      if (data.jwt) {
        setToken(data.jwt)
        setUser(data.user.username)
      }
    })
  }

  const handleLogout = () => {
    clearToken()
    dispatch(clearUser())
  }

  useEffect(() => {
    checkAuthorization()
  }, [])

  const redirectToLoginPreCheck = (route = "/") => {
    if (userExists()) {
      switch (route) {
        case "events":
        case "videos":
        case "photos":
          return <PostContainer route={route} />

        case "posts/:id":
          return <PostShowContainer />
        
        default:
          return <BoardsContainer />
      }
    } else {
      return <Redirect to="/login" />
    }
  } 

  const redirectToHomePreCheck = route => {
    if (noUser()) {
      switch (route) {
        case "signup":
          return <SignupForm handleSignup={handleSignup} />

        case "login":
        default:
          return <LoginForm handleLogin={handleLogin} />
       }

    } else {
      return <Redirect to="/" />
    }
  }

  const checkForTokenAndUser = () => {
    if (getToken() && noUser()) {
      return null
    } else {
      return (
        <Router>
          <NavBar handleLogout={handleLogout} />

          <Switch>
            
            <Route path="/signup" exact >
              {redirectToHomePreCheck("signup")}
            </Route>

            <Route path="/login" exact >
              {redirectToHomePreCheck("login")}
            </Route>

            <Route path="/events" exact >
              {redirectToLoginPreCheck("events")}
            </Route>

            <Route path="/videos" exact >
              {redirectToLoginPreCheck("videos")}
            </Route>

            <Route path="/photos" exact >
              {redirectToLoginPreCheck("photos")}
            </Route>

            <Route path="/posts/:id" exact>
              {redirectToLoginPreCheck("posts/:id")}
            </Route>
            
            <Route path="/" exact >
              {redirectToLoginPreCheck()}
            </Route>

            <Route path="*" component={NoMatch} />

          </Switch>
        </Router>
      )
    }
  }

  return (
    <>
      {checkForTokenAndUser()}
    </>
  )
}

export default App