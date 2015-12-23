const render = require('./src/render/render')
const Todos = require('./src/todos')
const rendered = render(Todos)

const toHTML = require('vdom-to-html')
const beautify = require('js-beautify').html
const appMarkup = beautify(toHTML(rendered), { indent_size: 2 })

function updateAppMarkup (inputFilename, outputFilename, markup) {
  const read = require('fs').readFileSync
  const page = read(inputFilename, 'utf-8')

  const write = require('fs').writeFileSync

  // temp hack with ID in the closing tag
  const openTag = '<div id="app">'
  const closeTag = '</div id="app">'
  const appDiv = openTag + closeTag
  if (!page.indexOf(appDiv)) {
    throw new Error('Cannot find markup ' + appDiv + ' in the page ' + inputFilename)
  }
  const hydratedPage = page.replace(appDiv, openTag + '\n' + markup + '\n' + closeTag)

  write(outputFilename, hydratedPage)
  console.log('saved hydrated index', outputFilename)
}

updateAppMarkup('./index.html', './dist/index.html', appMarkup)

