import pageLogo from "./assets/boat.png"
import "./App.css"
import { NewShipmentForm } from "./components/NewShipmentForm"
// import { NavBar } from "./components/NavBar"
import { Shipments } from "./components/Shipments"

function App() {
  // eslint-disable-next-line no-unused-vars

  return (<>
  <div className="page">
    {/* <NavBar /> */}
    <div className="page-content">
      <img src={pageLogo} width="150px" />
      <h1>shiptrack</h1>
      <NewShipmentForm />
      <Shipments />
    </div></div></>
  )
}

export default App
