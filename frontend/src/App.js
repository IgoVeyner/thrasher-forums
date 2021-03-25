import './App.css'
import Home from './redux/components/home'
import SignupForm from './redux/components/forms/signup'
import LoginForm from './redux/components/forms/login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react'
import { fetchLogin, postUser } from './fetches'

function App() {

  const [user, setUser] = useState({})

  const handleSignup = newUser => {
    postUser(newUser)
    .then(data => {
      if (data.error) {
        // display user errors on screen differently
        alert(data.messages)
      }
      
      if (data.jwt) {
        localStorage.setItem('jwt', data.jwt)
        setUser(data.user)
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
        setUser(data.user)
      }
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt')
    setUser({})
  }

  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/signup" exact render={ () => <SignupForm handleSignup={handleSignup} /> } />
      <Route path="/login" exact render={ () => <LoginForm handleLogin={handleLogin} /> } />

      <button onClick={handleLogout}>LOGOUT</button>
    </Router>
  );
}

export default App;
