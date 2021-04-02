import { useState } from 'react'

export default function LoginForm({ handleLogin }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = e => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value)
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
    handleLogin({user: { username, password }})
  }

  return (
    <main>
      <div id="login-form-container">
        <form id="login-form" onSubmit={handleSubmit}>

          <div id="login-header-container">
            <h2 id="login-header">LOGIN</h2> 
          </div>

          <div className="login-input-container">
            <label className="login-label">username</label>

            <input 
              className="login-input"
              type="text"
              name="username"
              onChange={handleChange}
              value={username}
            />
          </div>


          <div className="login-input-container">
            <label className="login-label">password</label>

            <input 
              className="login-input"
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </div>

          <div className="login-button-container">
            <input 
              className="button login-button"
              type="submit" 
              value="Login" 
            />
          </div>

        </form>
      </div>
    </main>
  )

}