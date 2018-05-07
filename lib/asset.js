const { Asset } = require('parcel-bundler');
const svg = require("svgo");

class InlineSvgAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
  }
  async parse(str) {
    const svgo = new svg({
      plugins: [{
          removeDoctype: true
        },
        {
          removeComments: true
        },
        {
          removeXMLNS: true
        }
      ]
    });

    const optimizedSvg = await svgo.optimize(str);

    this.code = optimizedSvg.data
  }
  generate() {
    // Send to JS bundler
    return {
      'js': `module.exports = \`${this.code}\``
    };
  }
}

module.exports = InlineSvgAsset;