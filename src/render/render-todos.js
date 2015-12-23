const h = require('virtual-dom/h')
const renderTodo = require('./render-todo')

function render (Todos) {
  return h('section', {className: 'main'}, [
    h('input', {
      className: 'toggle-all',
      type: 'checkbox',
      onclick: function (e) {
        console.log('nothing')
        // Todos.mark(e.target.checked);
        // renderApp();
      }
    }),
    h('label', {htmlFor: 'toggle-all'}, 'Mark all as complete'),
    h('ul', {className: 'todo-list'},
      Todos.items.map(renderTodo.bind(null, Todos)))
  ])
}

module.exports = render
