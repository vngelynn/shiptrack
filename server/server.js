const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require("./db/pool")

const apiRouter = require('./routes/api')

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || "localhost"

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Landing Page')
})

app.use('/api', apiRouter)

pool.connect((err) => {
  if (err) {
    console.error("Error connecting to database", err)
  } else {
    console.log("Successfully connected to database")
  }
})

app.listen(PORT, HOST, () =>
  console.log(`Server listening on http://${HOST}:${PORT}`)
)