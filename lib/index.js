
function Init (bundler) {
  bundler.addAssetType('svg', require.resolve('./asset.js'));
}

module.exports = Init