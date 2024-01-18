// import React from "react"
import { useState } from "react"
import "./NewShipmentForm.css"

export function NewShipmentForm() {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  // const [shipments, setShipments] = useState([])

  // TODO: validate input
  // const [formData, setFormData] = useState({
  //   shipment: '',
  //   date: ''
  // })

  // TODO: implement users
  const username = "demo"

  const handleNewShipment = async (e) => {
    e.preventDefault()
    try {
      const body = { username, title, date }
      const response = await fetch("http://localhost:3000/api/shipment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
      
      const responseBody = await response.json()
      return responseBody
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div className="new-form">
      <form onSubmit={handleNewShipment}>
        <label>title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>shipping date(s)</label>
        <input
          type="text"
          name="dates"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <center>
          <button className="add-button">add shipment</button>
        </center>
      </form>
    </div>
  )
}
