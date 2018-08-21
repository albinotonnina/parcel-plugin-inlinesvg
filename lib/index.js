const IMAGE_PACKAGER = './ImagePackager';

module.exports = function (bundler) {
  // hello
  // bundler.addAssetType('svg', require.resolve('./asset.js'));
  bundler.addPackager('svg', require.resolve(IMAGE_PACKAGER));
}