const { createShipment, readShipments } = require('../models/shipmentModel')

async function addShipment(req, res, next) {
    const { username, title, date } = req.body

    const result = await createShipment(username, title, date)
    return next()
}

async function getShipments(req, res, next) {
    const { username } = req.body
    const shipments = await readShipments(username)

    res.locals.shipments = shipments.map(shipment => ({
        id: shipment.id,
        title: shipment.title,
        created_at: shipment.created_at,
        date: shipment.date,
        tracking: shipment.tracking
    }))

    return next()
}

module.exports = { addShipment, getShipments }