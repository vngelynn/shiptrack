import { useState, useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase"

export function AuthInfo() {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => {
      listen()
    }
  }, [])

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Successfully Signed Out"))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      {authUser ? (
        <>
          Signed In as ${authUser.email}
          <button onClick={handleSignOut}>Sign Out</button>{" "}
        </>
      ) : (
        "Signed Out"
      )}
    </div>
  )
}
