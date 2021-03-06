const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hi ${req.body.email}, you are registered ...`
  })
})

var port = process.env.PORT || 8081
app.listen(port, () => {
  console.log('listening on port ' + port)
})
