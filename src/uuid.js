// from http://jsfiddle.net/briguy37/2mvfd/
function uuid () {
  var d = new Date().getTime()
  var uuidFormat = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  var uuid = uuidFormat.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
  return uuid
}

module.exports = uuid
