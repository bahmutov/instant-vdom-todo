const la = require('lazy-ass')
const is = require('check-more-types')
const uuid = require('./uuid')

var Todos = {
  add: function (what) {
    Todos.items.unshift({
      what: what,
      done: false,
      id: uuid()
    })
  },
  mark: function (id, done) {
    Todos.items.forEach(function (todo) {
      if (todo.id === id) {
        todo.done = done
      }
    })
  },
  remove: function (todo) {
    Todos.items = Todos.items.filter(function (t) {
      return t.id !== todo.id
    })
  },
  items: require('./data.json')
}

la(is.array(Todos.items), 'expected list of todos', Todos.items)

module.exports = Todos
