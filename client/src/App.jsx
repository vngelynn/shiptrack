import "./App.css"
import { Home } from "./pages/Home"
import { AddShipments } from "./pages/AddShipments"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { NavBar } from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Shipments } from "./pages/Shipments"

function App() {
  // eslint-disable-next-line no-unused-vars

  return (
    <Router>
      <NavBar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<AddShipments />} />
          <Route path="/shipments" element={<Shipments />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
