import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from 'react-router-dom'

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSignIn (e) {
    e.preventDefault()
    
    try {
      setError('')
      setLoading(true)
      await login(email, password)
      navigate('/shipments')
    } catch (error) {
        setError('Failed to log in.')
        console.log('Failed to log in: ', error)
    }
  }
  return (
    <form onSubmit={handleSignIn}>
      {error && error}
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
      </div>
      <div className="login-action">
        <div>
          <input type="checkbox" id="remember-user" />
          <label htmlFor="remember-user">Remember Me</label>
        </div>
        <div>
          <button className="forgot-button">Forgot Password</button>
        </div>
      </div>
      <div className="auth-buttons">
        <button type="submit" disabled={loading}>Log In</button>
        <center>or</center>
        <button>Log In with Google</button>
      </div>
    </form>
  )
}
