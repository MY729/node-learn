var http = require('http')

var tools1 = require('./03_too-add')
var tools2 = require('03_tool-multiply')
var tools3 = require('jsliang-module')

http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  })

  // res.write('<h1>你好</h1>')
  console.log('tools1===', tools1.add(1, 2, 3))
  console.log('tools2===', tools2.multiply(1, 2, 3, 4))
  console.log('tools3===', tools3.add(1, 2, 3))
  res.end('<h1>你好</h1>')
}).listen(3000)