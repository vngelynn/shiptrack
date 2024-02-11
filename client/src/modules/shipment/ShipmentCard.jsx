/* eslint-disable react/prop-types */
import { useState } from "react"
import { Typography } from "../../components/Typography"

//TODO: add view IF you can use carrier API
// eslint-disable-next-line react/prop-types
export function ShipmentCard({ shipment, deleteShipment }) {
  const [editId, setEditId] = useState(null)
  const [updateData, setUpdateData] = useState({})
  const [showModal, setShowModal] = useState(false)

  const saveUpdateShipment = async (id) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(`http://localhost:3000/api/shipment/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      })

      if (response.ok) {
        setEditId(null)
        setUpdateData({})
      }
      location.reload()
    } catch (err) {
      console.error("Error updating data: ", err.message)
    }
  }

  const formatDateString = (dateStr) => {
    let date = new Date(dateStr)
    return `${(date.getMonth() + 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    })}/${date.getDate().toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    })}/${date.getFullYear()}`
  }

  return (
    <div className="shipment">
      <div className="shipment-header">
        <div className="shipment-head">
          <Typography type="shipment-title">{shipment.title}</Typography>
          {editId && (
            <div className="actions">
              <button
                className="tracking-button"
                onClick={() => saveUpdateShipment(shipment.id)}
              >
                save
              </button>
              <button
                className="tracking-button"
                onClick={() => setEditId(null)}
              >
                cancel
              </button>
            </div>
          )}
        </div>
        <div
          onDoubleClick={() => setEditId(shipment.id)}
          className="shipment-tracking"
        >
          {editId == shipment.id ? (
            <input
              type="text"
              value={updateData.tracking}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  tracking: e.target.value,
                })
              }
            />
          ) : shipment.tracking ? (
            <a href={shipment.tracking} target="_blank" rel="noreferrer noopener" className="shipment-tracking">Track</a>
          ) : (
            <Typography type="body">add tracking</Typography>
          )}
        </div>
      </div>
      <Typography type="body">Estimated Shipping Date(s): </Typography>
      {shipment.date ? (
        <Typography type="body">{formatDateString(shipment.date)} </Typography>
      ) : (
        <Typography type="body">N/A</Typography>
      )}

      {shipment.secondary_date && (
        <Typography type="body">
          - {formatDateString(shipment.secondary_date)}
        </Typography>
      )}
      <div className="shipment-button-container">
        <div className="action-buttons">
          <button className="action-button" onClick={() => location.href='/shipment'}>View/Edit</button>
          <button className="action-button">Archive</button>
        </div>
        <button onClick={() => setShowModal(true)} className="action-button">Delete</button>
      </div>
      {showModal && (
        <dialog className="delete-dialog">
          Are you sure you want to delete {shipment.title}?{" "}
          <div className="action-buttons">
            <button onClick={() => deleteShipment(shipment.id)}>Yes</button>
            <button onClick={() => setShowModal(false)}>No</button>
          </div>
        </dialog>
      )}
    </div>
  )
}
