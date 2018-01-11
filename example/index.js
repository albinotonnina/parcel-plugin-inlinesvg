import chromeSvg from "./svg/chrome.svg";
import firefoxSvg from "./svg/firefox.svg";
import safariSvg from "./svg/safari.svg";
import edgeSvg from "./svg/edge.svg";
import operaSvg from "./svg/opera.svg";
import explorerSvg from "./svg/explorer.svg";
import dummySvg from "./svg/dummy.svg";

// const parser = new DOMParser();
// const svgElement = parser.parseFromString(chromeSvg, "image/svg+xml");

const chromeElement = document.createElement("span");
const firefoxElement = document.createElement("span");
const safariElement = document.createElement("span");
const edgeElement = document.createElement("span");
const operaElement = document.createElement("span");
const explorerElement = document.createElement("span");
const dummyEl = document.createElement("span");

chromeElement.innerHTML = chromeSvg;
firefoxElement.innerHTML = firefoxSvg;
safariElement.innerHTML = safariSvg;
edgeElement.innerHTML = edgeSvg;
operaElement.innerHTML = operaSvg;
explorerElement.innerHTML = explorerSvg;
dummyEl.innerHTML = dummySvg;

document.body.appendChild(chromeElement);
document.body.appendChild(firefoxElement);
document.body.appendChild(safariElement);
document.body.appendChild(edgeElement);
document.body.appendChild(operaElement);
document.body.appendChild(explorerElement);
document.body.appendChild(dummyEl);
