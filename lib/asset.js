const svg = require("svgo");
const JSAssetLib = require('parcel-bundler/lib/assets/JSAsset')
const JSAssetSrc = require('parcel-bundler/src/assets/JSAsset')

const JSAsset = parseInt(process.versions.node, 10) < 8 ? JSAssetLib : JSAssetSrc

const { getOptions } = require("./config");
const { read } = require("./utils");

class InlineSvgAsset extends JSAsset {
  async load() {
    const file = read(this.name, "binary");

    const svgo = new svg({
      plugins: [
        { removeDoctype: true },
        { removeComments: true },
        { removeXMLNS: true }
      ]
    });

    const optimizedSvg = await svgo.optimize(file);

    return `module.exports = '${optimizedSvg.data}';`;
  }

  pretransform() {}
  transform() {}
}

module.exports = InlineSvgAsset;
