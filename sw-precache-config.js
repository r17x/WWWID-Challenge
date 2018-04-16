module.exports = {
  staticFileGlobs: [
    'build/static/css/*.css',
    'build/static/js/*.js',
    'build/index.html',
  ],
  stripPrefix: 'build',
  runtimeCaching: [{
    urlPattern: /rss2json.com/,
    handler: 'networkFirst',
  }, {
    urlPattern: /medium.com/,
    handler: 'cacheFirst',
  }],
};
