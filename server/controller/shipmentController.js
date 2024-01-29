const {
  createShipment,
  readShipments,
  deleteShipment: dbDeleteShipment,
  updateShipment: dbUpdateShipment,
} = require("../models/shipmentModel")

async function addShipment(req, res, next) {
  const { username, title, date, secondary_date, tracking } = req.body

  const result = await createShipment(username, title, date, secondary_date, tracking)
  return next()
}

async function deleteShipment(req, res, next) {
  const { id } = req.params

  const result = await dbDeleteShipment(id)
  return next()
}

async function updateShipment(req, res, next) {
  const { id } = req.params
  const { tracking } = req.body

  const result = await dbUpdateShipment(id, tracking)
  return next()
}

async function getShipments(req, res, next) {
  const { username } = req.body
  const shipments = await readShipments(username)

  res.locals.shipments = shipments.map((shipment) => ({
    id: shipment.id,
    title: shipment.title,
    created_at: shipment.created_at,
    date: shipment.date,
    secondary_date: shipment.secondary_date,
    tracking: shipment.tracking,
  }))

  return next()
}

module.exports = { addShipment, getShipments, deleteShipment, updateShipment }
