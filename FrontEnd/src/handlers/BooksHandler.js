import Api from './Api'

export default {
  index () {
    return Api().get('/index')
  },
  find (id) {
    return Api.get('/:id')
  }
}