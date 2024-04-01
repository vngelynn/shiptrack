import { Typography } from "../components/Typography"
import { LoginForm } from "../modules/auth/LoginForm"
import "../modules/auth/auth.css"

export function Login() {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <Typography type="form-header-italicize">Login</Typography>
        <Typography type="secondary-text">
          Get back on track with your shipments
        </Typography>
      </div>
      <LoginForm />
      <center>
        <Typography type="secondary-text body">
          {`Don't have an account? `}
          <a href="/signup">Sign Up</a>
        </Typography>
      </center>
    </div>
  )
}
