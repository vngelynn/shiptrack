import { SignUpForm } from "../modules/auth/SignUpForm"
import { Typography } from "../components/Typography"
import "../modules/auth/auth.css"

export function Signup() {
  return (
    <div className="auth-container">
      {" "}
      <div className="auth-header">
        <Typography type="header-1-italicize">Sign Up</Typography>
        <Typography type="secondary-text">
          Start tracking your shipments
        </Typography>
      </div>
      <SignUpForm />
      <center>
      <Typography type="body">Already have an account? <a href="/login">Log In</a></Typography>
      </center>
    </div>
  )
}
