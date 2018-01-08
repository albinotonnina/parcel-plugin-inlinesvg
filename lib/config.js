const { r, read } = require('./utils')

const ProjectRootPath = r('../../../')

const ParcelrcPath = ProjectRootPath + '/.parcelrc'

let options = void 0
const getOptions = async () => {
  if (!options) {
    const defaultOptions = {
      exts: ['jpg', 'jpeg', 'png', 'gif'],
      limit: 10240
    }
    try {
      const rc = JSON.parse(read(ParcelrcPath))['url-loader']
      options = Object.assign(defaultOptions, rc)
    } catch (err) {
      options = defaultOptions
    }
  }
  return options
}

exports.ProjectRootPath = ProjectRootPath
exports.ParcelrcPath = ParcelrcPath
exports.getOptions = getOptions
