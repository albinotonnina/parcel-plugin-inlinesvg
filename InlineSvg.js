const svg = require('svgo');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');

class InlineSvgAsset extends JSAsset {

  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'svg';
  }

  generate() {
    return {
      js: this.code
    };
  }

  parse(code) {

    const svgo = new svg({
      plugins: [{ removeDoctype: true }, { removeComments: true }],
    });

    return svgo.optimize(code)
      .then(result => result.data)
      .then(result=>{
        let component = `function () { return '${result}'}()`;
        this.code = `module.exports = ${component};`
        return super.parse(this.code)
      })
  }

}

module.exports = InlineSvgAsset;