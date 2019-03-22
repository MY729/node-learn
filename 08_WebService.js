let http = require('http')
let fs = require('fs')
let url = require('url')
let path = require('path')

http.createServer((req, res) => {
  let pathName = url.parse(req.url).pathname

  if (pathName == '/') {
    pathName = "index.html"
  }

  let extName = path.extname(pathName)

  if (pathName != '/favicon.ico') {
    fs.readFile('./08_WebService/' + pathName, (err, data) => {
      if (err) {
        console.log('404 NOT FOUND')
        fs.readFile('./08_WebService/404.html', (errNotFound, dataNotFound) => {
          if (err) {
            console.log(errNotFound)
          } else {
            res.writeHead(200, {
              "Content-Type": "text/html; charset='UTF-8'"
            })
            res.write(data)
            res.end()
          }
        })
        return
      } else {
        let ext = getExt(extName)
        res.writeHead(200, {
          "Content-Type": ext + "; charset='UTF-8'"
        })
        res.write(data)
        res.end()
      }
    })
  }
}).listen(8081)

getExt = (extName) => {
  let data = fs.readFileSync('./08_ext.json')
  let ext = JSON.parse(data.toString())
  return ext[extName]
}