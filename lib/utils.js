const { writeFile, readFileSync } = require('fs')
const { resolve } = require('path')

const r = path => resolve(__dirname, path)

const read = (filePath, encoding = 'utf-8') => readFileSync(filePath, { encoding })

const write = (name, data, options = 'utf-8') => (
  new Promise((resolve, reject) => {
    writeFile(name, data, options, (err) => {
      if (err) reject(err)
      else resolve()
    })
  })
)

exports.r = r
exports.read = read
exports.write = write
