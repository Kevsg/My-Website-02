const BooksController = require('./controllers/BooksController')

module.exports = (app) => {
  app.get('/index',
    BooksController.index)
}