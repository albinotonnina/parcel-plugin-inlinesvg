import chromeSvg from './svg/chrome.svg'
import firefoxSvg from './svg/firefox.svg'
import safariSvg from './svg/safari.svg'
import edgeSvg from './svg/edge.svg'
import operaSvg from './svg/opera.svg'
import explorerSvg from './svg/explorer.svg'

function initComponent() {
  // const parser = new DOMParser();
  // const svgElement = parser.parseFromString(chromeSvg, "image/svg+xml");
  const chromeElement = document.createElement("div");
  const firefoxElement = document.createElement("div");
  const safariElement = document.createElement("div");
  const edgeElement = document.createElement("div");
  const operaElement = document.createElement("div");
  const explorerElement = document.createElement("div");

  chromeElement.innerHTML = chromeSvg;
  firefoxElement.innerHTML = firefoxSvg;
  safariElement.innerHTML = safariSvg;
  edgeElement.innerHTML = edgeSvg;
  operaElement.innerHTML = operaSvg;
  explorerElement.innerHTML = explorerSvg;

  document.body.appendChild(chromeElement);
  document.body.appendChild(firefoxElement);
  document.body.appendChild(safariElement);
  document.body.appendChild(edgeElement);
  document.body.appendChild(operaElement);
  document.body.appendChild(explorerElement);
}

document.addEventListener("DOMContentLoaded", function() {
  initComponent();
});
