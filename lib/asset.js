const { Asset } = require('parcel-bundler');
const svg = require("svgo");

class InlineSvgAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'svg'
    // this.encoding = null
  }
  // async parse(str) {
  //   const svgo = new svg({
  //     plugins: [{
  //         removeDoctype: true
  //       },
  //       {
  //         removeComments: true
  //       },
  //       {
  //         removeXMLNS: true
  //       }
  //     ]
  //   });

  //   const optimizedSvg = await svgo.optimize(str);

  //   this.code = optimizedSvg.data
  // }
//   async generate() {
// return {}
//   }
}

module.exports = InlineSvgAsset;