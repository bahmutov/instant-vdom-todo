const h = require('virtual-dom/h')
const header = require('./render-header')
const renderTodos = require('./render-todos')
const footer = require('./render-footer')

function render (todos) {
  return h('section', {className: 'todoapp'}, [
    header(todos),
    renderTodos(todos),
    footer(todos)
  ])
}

module.exports = render
