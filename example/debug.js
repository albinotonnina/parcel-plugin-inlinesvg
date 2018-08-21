const Bundler = require("parcel-bundler");

const bundler = new Bundler("index.js", {
  cache: false
});

bundler.bundle();
