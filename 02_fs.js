const fs = require('fs')

let fileReadStream = fs.createReadStream('text.js')

let count = 0

let str = ''

// 开始读取
fileReadStream.on('data', (chunk) => {
  console.log(`${++count} 接收到：${chunk.length}`)
  str += chunk
})

// 读取完成
fileReadStream.on('end', () => {
  console.log("结束")
  console.log(count)
  console.log(str)
})

//读取失败
fileReadStream.on('error', (err) => {
  console.log(err)
})
