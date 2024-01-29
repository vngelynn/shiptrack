import { useState, useEffect } from "react"
import { Shipment } from "../modules/shipment/Shipment"
import { Typography } from "../components/Typography"
import "../modules/shipment/Shipments.css"

export function Shipments() {
  const [shipments, setShipments] = useState([])

  useEffect(() => {
    getShipments()
  }, [])

  const getShipments = () => {
    fetch("http://localhost:3000/api/shipment")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setShipments(data)
      })
  }

  const submitDeleteShipment = async (id) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(`http://localhost:3000/api/shipment/${id}`, {
        method: "DELETE",
      })

      setShipments(shipments.filter((shipment) => shipment.id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <>
      {" "}
      <Typography type="page-title">My Shipments</Typography>
      <div className="shipments-container">
        {shipments.length
          ? shipments.map((shipment) => (
              <Shipment
                key={shipment.id}
                shipment={shipment}
                deleteShipment={submitDeleteShipment}
              />
            ))
          : "No Shipments on Record"}
      </div>
    </>
  )
}
