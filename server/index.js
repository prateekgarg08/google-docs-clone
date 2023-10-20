const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const errorHandlerMiddleware = require('./middlewares/error-handler')
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000
app.get('/', (req, res) => {
  res.send("hello world")
})

app.listen(port, () => console.log(`Listening on port ${port}`))
