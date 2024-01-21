const { Router } = require('express')
const { addShipment, getShipments, deleteShipment, updateShipment } = require('../controller/shipmentController')

const router = Router()

router.get('/', getShipments, (req, res, next) => {
    return res.json(res.locals.shipments)
})

router.post('/', addShipment, (req, res, next) => {
    return res.json({ shipments: res.locals.shipments })
})

router.patch('/:id', updateShipment, (req, res, next) => {
 return 'hi'
})

router.delete('/:id', deleteShipment, (req, res, next) => {
    return res.json("Shipment was successfully deleted")
})


module.exports = router