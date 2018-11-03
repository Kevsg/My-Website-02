const express = require('express')
const app = express()
const port = 3000
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://postgres:XXXXXX@localhost:5565/Website02DB')


app.get('/', (req, res) => res.send('Hello World!'))

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })

db.any('Select * from "Books"."BookAuthor"').then(function(result) {console.log(result)})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

