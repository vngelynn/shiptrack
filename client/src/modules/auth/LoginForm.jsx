import { useState } from "react"
import { Typography } from "../../components/Typography"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential: ", userCredential)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <form onSubmit={handleSignIn}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="email">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
      </div>
      <div>
        <input type="checkbox" id="remember-user" />
        <label htmlFor="remember-user">Remember Me</label>
        <input type="checkbox" id="forgot-password" />
        <label htmlFor="forgot-password">Forgot Password</label>
      </div>
      <button type="submit">Log In</button>
      <button>Log In with Google</button>
      <Typography type="body">{`Don't have an account? `}Sign up</Typography>
    </form>
  )
}
