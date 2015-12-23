const h = require('virtual-dom/h')

function render (Todos) {
  function isEnter (e) {
    return e.keyCode === 13
  }
  function onKey (e) {
    console.log('pressed', e.target.value)
    if (isEnter(e)) {
      Todos.add(e.target.value)
      e.target.value = ''
    }
  }

  return h('header', {className: 'header'}, [
    h('h1', {}, 'todos'),
    h('input', {
      className: 'new-todo',
      placeholder: 'What needs to be done?',
      autofocus: true,
      onkeyup: onKey
    }, [])
  ])
}

module.exports = render
