// import React from "react"
import { Typography } from "../components/Typography"
import pageLogo from "../assets/boat.png"
import userProfile from "../assets/user-profile.png"
import { useAuth } from '../context/AuthContext'
import "./NavBar.css"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"

export function NavBar() {
  const { currentUser } = useAuth()

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
          <li>
            <img src={userProfile} width="30px" />
          </li>
          {currentUser ? <li><button onClick={handleSignOut}>Sign Out</button></li>: 
            <li><a href="/login" className="user-action">Log In</a> | <a href="/signup" className="user-action">Sign Up</a>
          </li>}
        </ul>
      </nav>
      <nav className="nav secondary">
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
      </nav>
    </div>
  )
}
