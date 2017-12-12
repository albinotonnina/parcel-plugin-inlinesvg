module.exports = function (bundler) {
    // bundler.addAssetType('html', require.resolve('./SvelteAsset'));
    bundler.addAssetType('svg', require.resolve('./InlineSvg'));
};