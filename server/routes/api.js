const { Router } = require('express')

const shipmentRouter = require('./shipment')

const router = Router()

router.use('/shipment', shipmentRouter)

module.exports = router