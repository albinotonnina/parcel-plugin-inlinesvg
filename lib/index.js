
function Init (bundler) {
  bundler.addAssetType('svg', require.resolve('./asset.js'));
  bundler.addPackager('js', require.resolve('./packager.js'))
}

module.exports = Init