import { Typography } from "../components/Typography"
import { LoginForm } from "../modules/auth/LoginForm"
import { AuthInfo } from '../modules/AuthInfo'

export function Login() {
  return (
    <div>
      <Typography type="shipment-title">Welcome Back!</Typography>
      <LoginForm />
      <AuthInfo />
    </div>
  )
}
