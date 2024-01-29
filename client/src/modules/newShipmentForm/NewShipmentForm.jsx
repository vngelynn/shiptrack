// import React from "react"
import { useState } from "react"
import "./NewShipmentForm.css"

export function NewShipmentForm() {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState(new Date())
  const [secondaryDate, setSecondaryDate] = useState(null)
  const [toggleDateRange, setToggleDateRange] = useState(false)

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
      const body = { username, title, date, secondary_date:secondaryDate }
      const response = await fetch("http://localhost:3000/api/shipment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
      
      const responseBody = await response.json()
      
      if (response.ok) {
        location.reload()
      } else {
        console.err('Failed to fetch data: ', response.statusText)
      }
      return responseBody
    
    } catch (err) {
      console.error('Error fetching data: ', err.message)
    }
  }

  // TODO: require title
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
        <div><input
          type="date"
          name="dates"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        {toggleDateRange && <> - <input
          type="date"
          name="dates"
          value={secondaryDate}
          onChange={(e) => setSecondaryDate(e.target.value)}
        ></input></>}</div>
        <button type="button" className="date-range" onClick={() => setToggleDateRange(!toggleDateRange)}>date range?</button>
        <center>
          <button className="add-button" type="submit">add shipment</button>
        </center>
      </form>
    </div>
  )
}
