import "./App.css"
import { LandingPage } from "./pages/LandingPage"
import { AddShipments } from "./pages/AddShipments"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { NavBar } from "./components/NavBar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Shipments } from "./pages/Shipments"
import { Shipment } from "./pages/Shipment"
import { AuthProvider } from "./context/AuthContext"

function App() {
  // eslint-disable-next-line no-unused-vars

  return (
    <Router>
    <AuthProvider>
        <NavBar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add" element={<AddShipments />} />
            <Route path="/shipments" element={<Shipments />} />
            <Route path="/shipment/:id" element={<Shipment />} />
          </Routes>
        </div>
    </AuthProvider>
    </Router>
  )
}

export default App
