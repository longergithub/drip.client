var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('autoprefixer')({
      browsers: [
          "last 10 ios versions",
          "last 10 android versions",
          "last 10 ChromeAndroid versions",
          "last 10 Chrome versions",
          "last 10 Safari versions",
          "last 10 Samsung versions",
          "last 10 UCAndroid versions",
          "last 10 versions"
      ]
    })
  ]
}
