module.exports = function (bundler) {
  bundler.addAssetType('svg', require.resolve('./asset.js'));
}