// import React from "react"
import pageLogo from "../assets/boat.png"
import userProfile from "../assets/user-profile.png"
import "./NavBar.css"
export function NavBar() {
  return (
    <div className="nav-container">
      <nav className="nav">
        <a href="/" className="logo">
          <img src={pageLogo} width="50px" />
          shiptrack
        </a>
        <ul>
          <li>
            <img src={userProfile} width="30px" />
          </li>
          <li>
            <a href="/login" className="user-action">Log In</a> | <a href="/signup" className="user-action">Sign Up</a>
          </li>
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
