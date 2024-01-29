/* eslint-disable react/prop-types */
import { useState } from "react"
import recycle from "../../assets/recycle.png"

// eslint-disable-next-line react/prop-types
export function Shipment({ shipment, deleteShipment }) {
  const [editId, setEditId] = useState(null)
  const [updateData, setUpdateData] = useState({})

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
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }

  return (
    <div className="shipment-container">
      <div className="shipment">
        <div className="shipment-header">
          <div className="shipment-head">
            <div>
              {formatDateString(shipment.date)}
              {shipment.secondary_date &&
                ` - ${formatDateString(shipment.secondary_date)}`}
            </div>
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
              <span>{shipment.tracking}</span>
            ) : (
              <span>add tracking</span>
            )}
          </div>
        </div>
        <p className="shipment-title">{shipment.title}</p>
      </div>
      <button className="trashcan" onClick={() => deleteShipment(shipment.id)}>
        <img src={recycle} alt="delete" />
      </button>
    </div>
  )
}
