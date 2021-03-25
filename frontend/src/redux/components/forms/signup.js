import { useState } from 'react'

export default function SignupForm({handleSignup}) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = e => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      default:
        return null
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log("signingup")
    // not yet implemented
    // handleSignup({user: {username, password, email}})
  }

  return (
    <form id="login-form" onSubmit={handleSubmit}>

      <input type="text"
        name="username"
        onChange={handleChange}
        value={username}
        placeholder="username"
      />

      <input type="text"
        name="email"
        onChange={handleChange}
        value={email}
        placeholder="email"
      />

      <input type="text"
        name="password"
        onChange={handleChange}
        value={password}
        placeholder="password"
      />

      <input type="submit" value="Signup" />

    </form>
  )

}