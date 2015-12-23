'use strict'

require('../node_modules/todomvc-common/base.css')
require('../node_modules/todomvc-app-css/index.css')

const la = require('lazy-ass')
const is = require('check-more-types')
const tinyToast = require('tiny-toast')

const diff = require('virtual-dom/diff')
const patch = require('virtual-dom/patch')

const appNode = document.getElementById('app')
var renderedNode = appNode.firstElementChild

const VNode = require('virtual-dom/vnode/vnode')
const VText = require('virtual-dom/vnode/vtext')
const convertHTML = require('html-to-vdom')({
  VNode: VNode,
  VText: VText
})
const render = require('./render/render')
var prevView = convertHTML(renderedNode.outerHTML)

const Todos = require('./todos')

const appLabel = 'instant-vdom-todo'
const todosStorageLabel = appLabel + '-items'
var updatedTodos = localStorage.getItem(todosStorageLabel)
if (updatedTodos) {
  updatdTodos = JSON.parse(updatedTodos)
  Todos.items = updatedTodos
  console.log('set todos to local storage value with %d items',
    updatedTodos.length)
} else {
  console.log('No previous todo items found')
}

function saveApp () {
  localStorage.setItem(todosStorageLabel, JSON.stringify(Todos.items))
}

// add rendering call after data methods
// also save items
Object.keys(Todos).forEach(function (key) {
  const value = Todos[key]
  if (is.fn(value)) {
    Todos[key] = function () {
      const result = value.apply(Todos, arguments)
      saveApp()
      renderApp()
      return result
    }
  }
})

function renderApp () {
  console.log('rendering %d todos', Todos.items.length)
  const view = render(Todos)
  const patches = diff(prevView, view)
  renderedNode = patch(renderedNode, patches)
  prevView = view
}

console.log('initial render')
renderApp()
tinyToast.show('Rendered web app')
tinyToast.hide(2000)

window.renderApp = renderApp
