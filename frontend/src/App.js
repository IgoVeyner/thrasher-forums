import './App.css'
import Home from './redux/components/home'
import SignupForm from './redux/components/forms/signup'
import LoginForm from './redux/components/forms/login'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLogin, postUser } from './services/api'
import { getUser, setFetchedUser, clearUser } from './redux/actions/userActions'
import { setToken, clearToken } from './services/localstorage'
import NavBar from './redux/components/nav/navbar'
import { useEffect } from 'react'

function App() {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const setUserFromToken = () => dispatch(getUser())
  const setUser = username => dispatch(setFetchedUser(username))

  const checkAuthorization = () => {
    console.log("is the user valid?")
    if (localStorage.getItem('jwt')) {
      return setUserFromToken() === "" ? false : true  
    } 
    return false
  }

  const handleSignup = newUser => {
    postUser(newUser)
    .then(data => {
      if (data.error) {
        // display user errors on screen differently
        alert(data.messages)
      }
      
      if (data.jwt) {
        setToken(data.jwt)
        setUser(data.user.username)
      }
    })
  }

  const handleLogin = credentials => {
    fetchLogin(credentials).then(data => {
      if (data.error) {
        // display message on screen differently
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
  }, []);

  return (
    <Router>
      <NavBar handleLogout={handleLogout} />

      <Route path="/" exact >
        {console.log("checking for homepage")}
        {user === "" ? <Redirect to="/login" /> : <Home/> }
      </Route>
      
      <Route path="/signup" exact >
        {console.log("checking for signup")}
        {user !== "" ? <Redirect to="/" /> : <SignupForm handleSignup={handleSignup} />}
      </Route>

      <Route path="/login" exact >
        {console.log("checking for login")}
        {user !== "" ? <Redirect to="/" /> : <LoginForm handleLogin={handleLogin} /> }
      </Route>

    </Router>
  );
}

export default App;
