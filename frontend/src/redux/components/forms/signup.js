import { useState } from 'react'

export default function SignupForm({ handleSignup }) {

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
    handleSignup({user: {username, password, email}})
  }

  return (
    <main>
      <div id="signup-form-container">
        <form id="signup-form" onSubmit={handleSubmit}>

          <div id="signup-header-container">
            <h2 id="signup-header">SIGNUP</h2> 
          </div>

          <div className="signup-input-container">
            <label className="signup-label">username</label>

            <input 
              className="signup-input"
              type="text"
              name="username"
              onChange={handleChange}
              value={username}
            />
          </div>

          <div className="signup-input-container">
            <label className="signup-label">email</label>

            <input 
              className="signup-input"
              type="text"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>

          <div className="signup-input-container">
            <label className="signup-label">password</label>

            <input 
              className="signup-input"
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </div>

          <div className="signup-button-container">
            <input 
              className="button signup-button"
              type="submit" 
              value="Create Account" 
            />
          </div>

        </form>
      </div>
    </main>
  )

}