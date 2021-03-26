import './App.css'
import Home from './redux/components/home'
import SignupForm from './redux/components/forms/signup'
import LoginForm from './redux/components/forms/login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLogin, postUser } from './services/api'
import { getUser, setFetchedUser } from './redux/actions/userActions'

function App() {

  const currentUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  const setCurrentUser = () => dispatch(getUser())
  const setUser = username => dispatch(setFetchedUser(username))

  const handleSignup = newUser => {
    postUser(newUser)
    .then(data => {
      if (data.error) {
        // display user errors on screen differently
        alert(data.messages)
      }
      
      if (data.jwt) {
        localStorage.setItem('jwt', data.jwt)
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
        localStorage.setItem('jwt', data.jwt)
        setUser(data.user.username)
      }
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    setUser({})
  }

  useEffect(() => {
    // implement checking if a user is logged in or not
    // getCurrentUser()
    if (localStorage.getItem('jwt')) {
      // fetchProfile().then(data => console.log(data)) 
      setCurrentUser()
    } 
  }, [])

  return (
    <Router>
      {/* {currentUser !== {} ? currentUser : null} */}
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact render={ () => <SignupForm handleSignup={handleSignup} /> } />
      <Route path="/login" exact render={ () => <LoginForm handleLogin={handleLogin} /> } />

      <button onClick={handleLogout}>LOGOUT</button>
    </Router>
  );
}

export default App;
