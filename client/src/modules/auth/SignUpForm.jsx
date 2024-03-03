import { useState } from "react"
import { Typography } from "../../components/Typography"
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"

export function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential: ", userCredential)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  return (
    <form onSubmit={handleSignUp}>
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
      <button type="submit">Sign up</button>
      <button>Sign Up with Google</button>
      <Typography type="body">Already have an account? Sign up</Typography>
    </form>
  )
}
