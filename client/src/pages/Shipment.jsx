import { Typography } from "../components/Typography"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
export function Shipment() {
  const { id } = useParams()
  const [shipmentData, setShipmentData] = useState({})
  useEffect(() => {
    getShipmentById(id)
  })

  const getShipmentById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/shipment/${id}`, {
        method: "GET",
      })

      if (!response.ok) {
        throw new Error("Failed to fetch shipment")
      }

      setShipmentData(await response.json())
    } catch (err) {
      console.error("Error retrieving data: ", err.message)
      throw err // Re-throw the error to propagate it to the caller if necessary
    }
  }

  return (
    <div>
      <Typography type="shipment-title">{id}</Typography>
      {shipmentData.title && (
        <Typography type="shipment-title">{shipmentData.title}</Typography>
      )}
      {shipmentData.tracking && (
        <Typography type="shipment-title">{shipmentData.tracking}</Typography>
      )}
    </div>
  )
}
