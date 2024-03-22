import { useState } from "react"
import { useAuth } from "../../context/AuthContext"

export function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { signup } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    if (password !== confirmPassword) {
      return setError('Passwords do not match')
    }

    try {
      setError("")
      setLoading(true)
      await signup(email, password)
    } catch (error) {
      setError("Failed to create an account.")
      console.log("Failed to create an account: ", error)
    }
    setLoading(false)
  }


  return (
    <form onSubmit={handleSubmit}>
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
      <div className="input-container">
        <label htmlFor="email">Confirm Password</label>
        <input
          type="password"
          id="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="********"
        />
      </div>
      <div className="auth-buttons">
        <button disabled={loading} type="submit">Sign up</button>
        <center>or</center>
        <button>Sign Up with Google</button>
      </div>
    </form>
  )
}
