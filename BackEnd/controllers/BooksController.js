var db = require('../db');

module.exports = {
    async index (req, res) {
    console.log('Getting Query')
      try {
        info = db.any('Select * from "Books"."BookAuthor"').then(function(result) {res.send(result)})
      } catch (err) {
        console.log(err)
        res.status(500).send({
          error: 'an error has occured trying to fetch the Books Index'
        })
      }
    }
  }
  