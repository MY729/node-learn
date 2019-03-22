let fs = require('fs')

fs.stat('index.js', (error, stats) => {
  if (error) {
    console.log(error)
    return false
  } else {
    // console.log(stats)
    // console.log(`文件：${stats.isFile}`)
    // console.log(`目录：${stats.isDirectory}`)
    return false
  }
})

fs.mkdir('css', (err) => {
  if (err) {
    console.log(err)
    return false
  } else {
    console.log("创建目录")
  }
})

fs.rmdir('css', (err) => {
  if (err) {
    console.log(err)
    return false
  } else {
    console.log("删除目录成功")
  }
})

fs.writeFile('index.js', 'fmyzlm===', (err) => {
  if (err) {
    console.log(err)
    return false
  } else {
    console.log('写入成功')
  }
})

// fs.unlink('index.js', (err) => {
//   if (err) {
//     console.log(err)
//     return false
//   } else {
//     console.log('删除入成功')
//   }
// })

fs.appendFile('index.js', '追加文本背带裤被罚款===', (err) => {
  if (err) {
    console.log(err)
    return false
  } else {
    console.log('追加成功')
  }
})
