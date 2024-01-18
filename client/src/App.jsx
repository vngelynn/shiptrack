import { useState, useEffect } from "react"
import pageLogo from "./assets/boat.png"
import "./App.css"
import { NewShipmentForm } from "./components/NewShipmentForm"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [shipments, setShipments] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/shipment")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log("data: ", data)
        setShipments(data)
      })
  }, [])

  console.log('shipments: ', shipments)
  return (
    <>
      <img src={pageLogo} width="150px" />
      <h1>shiptrack</h1>
      <NewShipmentForm />
      {shipments.map((shipment) => (
        <h2 key={shipment.id}>{shipment.title}</h2>
      ))}
    </>
  )
}

export default App
