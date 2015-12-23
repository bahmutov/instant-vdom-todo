const generateFakeTodos = require('fake-todos')

const fakeTodos = generateFakeTodos(100)
const outputFilename = './src/data.json'
const write = require('fs').writeFileSync
write(outputFilename, JSON.stringify(fakeTodos, null, 2))

console.log('wrote fake data to', outputFilename)
