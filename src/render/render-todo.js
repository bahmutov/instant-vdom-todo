const h = require('virtual-dom/h')

function render (Todos, todo) {
  return h('li', {className: todo.done ? 'completed' : '', key: todo.id}, [
    h('div', {className: 'view'}, [
      h('input', {
        className: 'toggle',
        type: 'checkbox',
        checked: todo.done,
        onchange: function (e) {
          Todos.mark(todo.id, e.target.checked)
        }
      }),
      h('label', todo.what),
      h('button', {
        className: 'destroy',
        onclick: function (e) {
          console.log('nothing')
          Todos.remove(todo)
        }
      })
    ])
  ])
}

module.exports = render
