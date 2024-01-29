import { useState } from 'react';
import { NewShipmentForm } from "../modules/newShipmentForm/NewShipmentForm"
import { Typography } from "../components/Typography"
import connect from "../assets/connect.png"
import plusSign from "../assets/plus-sign.png"
import "./AddShipments.css"
export function AddShipments() {
    const [showManual, setShowManual] = useState(false)
  return (
    <>
      <Typography type="page-title">Add Shipments</Typography>
      <div className="add-section-container"><AddSection url={plusSign} text="Manually add shipment" onClick={() => setShowManual(!showManual)}/>
      {showManual && (<NewShipmentForm />)}
      <AddSection url={connect} text="Connect email or Amazon accounts" />
      </div>
    </>
  )
}

// eslint-disable-next-line react/prop-types
const AddSection = ({ url, text, onClick }) => {
  return (
    <div className="add-section" onClick={onClick}>
      <img src={url} width="15px"/> {text}
    </div>
  )
}
