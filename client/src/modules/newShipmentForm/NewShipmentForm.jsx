// import React from "react"
import { useState } from "react"
import { Typography } from "../../components/Typography"
import "./NewShipmentForm.css"

export function NewShipmentForm() {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState(null)
  const [secondaryDate, setSecondaryDate] = useState(null)
  const [tracking, setTracking] = useState(null)
  const [toggleDateRange, setToggleDateRange] = useState(false)
  const [toggleTracking, setToggleTracking] = useState(false)

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
      const body = { username, title, date, secondary_date: secondaryDate, tracking }
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
        console.err("Failed to fetch data: ", response.statusText)
      }
      return responseBody
    } catch (err) {
      console.error("Error fetching data: ", err.message)
    }
  }

  // TODO: require title
  return (
    <div className="new-form">
      <Typography type="info">Please enter any available information. These details can be edited later.</Typography>
      <form onSubmit={handleNewShipment}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Shipment Name"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <div><input type="checkbox" name="dateRange" checked={toggleDateRange} onChange={() => setToggleDateRange(!toggleDateRange)}></input>
        <label htmlFor="dateRange">
          Does this shipment have an estimated shipping date range?
        </label></div>
        <div>
          {toggleDateRange && (<><input
            type="date"
            name="dates"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
              {" "}
              -{" "}
              <input
                type="date"
                name="dates"
                value={secondaryDate}
                onChange={(e) => setSecondaryDate(e.target.value)}
              ></input>
            </>
          )}
        </div>
        <div><input type="checkbox" name="dateRange" checked={toggleTracking} onChange={() => setToggleTracking(!toggleTracking)}></input>
        <label htmlFor="dateRange">
          Do you already have the tracking number for this shipment?
        </label></div>
        {toggleTracking && (<div><input
          type="text"
          name="tracking"
          value={tracking}
          placeholder="Tracking Number"
          onChange={(e) => setTracking(e.target.value)}
        ></input>
        <input
          type="text"
          name="carrier"
          value={""}
          placeholder="Carrier Name"
          onChange={(e) => console.log(e)}
        ></input></div>)}
        <center>
          <button className="add-button" type="submit">
            add shipment
          </button>
        </center>
      </form>
    </div>
  )
}
