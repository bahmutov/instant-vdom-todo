const h = require('virtual-dom/h')

function hashFragment () {
  return typeof window !== 'undefined' && window.location.hash.split('/')[1] || ''
}

function countRemaining (todos) {
  return todos.length - todos.reduce(function (count, todo) {
    return count + Number(todo.done)
  }, 0)
}

function hasCompleted (todos) {
  return todos && todos.some(function (todo) {
    return todo.done
  })
}

function render (Todos) {
  const remaining = countRemaining(Todos.items)
  const route = hashFragment()

  return h('footer', {className: 'footer'}, [
    h('span', {className: 'todo-count'}, [
      h('strong', {}, String(remaining)),
      ' items left'
    ]),
    h('ul', {className: 'filters'}, [
      h('li', [
        h('a', {
          className: !route ? 'selected' : '',
          href: '#/'
        }, 'All')
      ]),
      h('li', [
        h('a', {
          className: route === 'active' ? 'selected' : '',
          href: '#/active'
        }, 'Active')
      ]),
      h('li', [
        h('a', {
          className: route === 'completed' ? 'selected' : '',
          href: '#/completed'
        }, 'Completed')
      ])
    ]),
    h('button', {
      className: 'clear-completed',
      style: {
        display: hasCompleted(Todos.items) ? 'block' : 'none'
      },
      onclick: function () {
        // todos && todos.clearCompleted();
        // renderApp();
      }
    }, 'Clear completed')
  ])
}

module.exports = render
