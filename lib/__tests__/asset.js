const Asset = require("../asset");

describe("Asset", () => {
  it("should ouput the optimized svg code...", (done) => {
    const asset = new Asset("./lib/__tests__/llama.svg", {}, { rootDir: __dirname });

    asset.load().then((pluginOutput)=>{
      expect(pluginOutput).toEqual(`module.exports = '<svg viewBox="0 0 98 115"><text>llama</text></svg>';`)
      done()
    })

  });
});
