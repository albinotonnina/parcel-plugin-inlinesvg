const Bundler = require('parcel-bundler');
const inlineSVGPlugin = require('../index');
const path = require('path');
const assertBundle = require('parcel-assert-bundle-tree');
const fs = require('fs');

const readFile = (location) => new Promise((resolve, reject) => fs.readFile(location, (err, data) => err ? reject(err) : resolve(data)));

describe("Asset", () => {
  it("should ouput the optimized svg code...", async () => {
    // Init bundler
    const bundler = new Bundler(path.join(__dirname, './llama.svg'), {
      outDir: path.join(__dirname, 'dist'),
      watch: false,
      cache: false,
      hmr: false,
      logLevel: 0
    });
    // Register plugin
    inlineSVGPlugin(bundler);

    // Bundle everything
    const bundle = await bundler.bundle();
    assertBundle(bundle, {
      type: 'js',
      name: 'llama.js',
      childBundler: [
        {
          type: 'map'
        }
      ]
    });
    
    // Check asset content
    expect({
      bundleContent: (await readFile(bundle.name)).toString()
    }).toEqual({
      bundleContent: expect.stringContaining('<svg viewBox="0 0 98 115"><text>llaméaa</text></svg>')
    });
  }, 25000);
});
