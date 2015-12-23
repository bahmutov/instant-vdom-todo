const render = require('./src/render/render')
const Todos = require('./src/todos')
const rendered = render(Todos)

const toHTML = require('vdom-to-html')
const beautify = require('js-beautify').html
const appMarkup = beautify(toHTML(rendered), { indent_size: 2 })

function updateAppMarkup (inputFilename, outputFilename, markup) {
  const read = require('fs').readFileSync
  const index = read(inputFilename, 'utf-8')

  const write = require('fs').writeFileSync

  const appId = '<div id="app">'
  const appDiv = appId + '</div>'
  const hydratedIndex = index.replace(appDiv, appId + '\n' + markup + '\n' + '</div>')

  write(outputFilename, hydratedIndex)
  console.log('saved hydrated index', outputFilename)
}

updateAppMarkup('./index.html', './dist/index.html', appMarkup)

