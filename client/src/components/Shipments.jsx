import { useState, useEffect } from "react"
import recycle from "../assets/recycle.png"
export function Shipments() {
  const [shipments, setShipments] = useState([])
  const [editId, setEditId] = useState(null)
  const [updateData, setUpdateData] = useState({})
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

  // const saveUpdateShipment = async (id) => {
  //   try {
  //     // eslint-disable-next-line no-unused-vars
  //     const response = await fetch(`http://localhost:3000/api/shipment/${id}`, {
  //       method: "PATCH",
  //       body: JSON.stringify(updateData)
  //     })
  //   } catch (err) {
  //     console.error('Error updating data: ', err.message)
  //   }
  // }

  const formatDateString = (dateStr) => {
    let date = new Date(dateStr)
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }

  return (
    <div>
      {shipments.length
        ? shipments.map((shipment) => (
            <div key={shipment.id} className="shipment-container">
              <div className="shipment">
                <div className="shipment-header">
                  <div className="shipment-head">
                    <div>
                      {formatDateString(shipment.date)}
                      {shipment.secondaryDate &&
                        ` - ${formatDateString(shipment.secondaryDate)}`}
                    </div>
                    {editId && (
                      <div className="actions">
                        <button
                          className="tracking-button"
                          // onClick={saveUpdateShipment}
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
                    ) : shipment.tracking ? (<span>
                      {shipment.tracking}</span>
                    ) : (
                      <span>add tracking</span>
                    )}
                  </div>
                </div>
                <p className="shipment-title">{shipment.title}</p>
              </div>
              <button
                className="trashcan"
                onClick={() => submitDeleteShipment(shipment.id)}
              >
                <img src={recycle} alt="delete" />
              </button>
            </div>
          ))
        : "No Shipments on Record"}
    </div>
  )
}
