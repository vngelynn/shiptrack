import { Typography } from "../components/Typography"
import pageLogo from "../assets/boat.png"
import userProfile from "../assets/user-profile.png"
import { useAuth } from "../context/AuthContext"
import "./NavBar.css"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useCallback, useState, useEffect, useRef } from "react"

const messages = ['Order organization made easy', 'Login or Sign up now!']

export function NavBar() {
  const { currentUser } = useAuth()
  const [message, setMessage] = useState(messages[0])
  const updateMessageRef = useRef()

  const rotate = useCallback(() => {
    message === messages[0] ? setMessage(messages[1]) : setMessage(messages[0])
    updateMessageRef.current.animate({
      opacity: [0, 1, 0]
    },
    5000)
  }, [message])

  useEffect(() => {
    const intervalID = setInterval(rotate, 5000)
    return () => clearInterval(intervalID)
  },[rotate])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Successfully Signed Out"))
      .catch((err) => console.log(err))
  }

  return (
    <div className="nav-container">
      <nav className="nav">
        <a href="/" className="logo">
          <img src={pageLogo} width="50px" />
          <Typography type="logo-text">ordernize</Typography>
        </a>
        <ul>
          {currentUser ? (
            <div className="user-nav-buttons">
              <li className="nav-profile-buttons">
                <img src={userProfile} width="30px" />
              </li>{" "}
              <li>
                <button className="landing-page-button" onClick={handleSignOut}>
                  Sign Out
                </button>
              </li>
            </div>
          ) : (
            <li>
              <div className="nav-buttons">
                <a href="/login">
                  <button className="landing-page-button">Login</button>
                </a>{" "}
                <a href="/signup">
                  <button className="landing-page-button">Sign Up</button>
                </a>
              </div>
            </li>
          )}
        </ul>
      </nav>
      <nav className="nav secondary">
        {currentUser ? (
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/add">Add Shipments</a>
            </li>
            <li>
              <a href="/shipments">My Shipments</a>
            </li>
          </ul>
        ) : (
          <div ref={updateMessageRef} style={{ opacity: 1 }}><Typography type="alert">{message}</Typography></div>
        )}
      </nav>
    </div>
  )
}
