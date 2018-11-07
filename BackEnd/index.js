const express = require('express')
const cors = require('cors')

const port = 3001

const app = express()
app.use(cors())

require('./routes')(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))