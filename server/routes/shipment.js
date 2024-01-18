const { Router } = require('express')
const { addShipment, getShipments } = require('../controller/shipmentController')

const router = Router()

router.get('/', getShipments, (req, res, next) => {
    return res.json(res.locals.shipments )
})

router.post('/', addShipment, (req, res, next) => {
    return res.json({ shipments: res.locals.shipments })
})

module.exports = router