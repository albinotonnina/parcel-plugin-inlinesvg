const mySvg = require('./laptop.svg')

function initComponent () {

  // const parser = new DOMParser();
  // const svgElement = parser.parseFromString(laptop, "image/svg+xml");

  const container = document.createElement('div')
  container.innerHTML = mySvg
  document.body.appendChild(container)

}

document.addEventListener('DOMContentLoaded', function () {
  initComponent()
})