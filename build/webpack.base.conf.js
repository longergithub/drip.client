var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
const vuxLoader = require('vux-loader')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
		modules: [
			resolve('src'),
			resolve('node_modules')
		],
    alias: {
			'vue$': 'vue/dist/vue.common.js',
			'src': resolve('src'),
      'apis': resolve('src/apis'),
			'assets': resolve('src/assets'),
      'common': resolve('src/common'),
      'configs': resolve('src/common/configs'),
      'enums': resolve('src/common/enums'),
      'filters': resolve('src/common/filters'),
      'mixins': resolve('src/common/mixins'),
      'settings': resolve('src/common/settings'),
      'utils': resolve('src/common/utils'),
			'components': resolve('src/components'),
			'router': resolve('src/router'),
			'scss': resolve('src/scss'),
      'views': resolve('src/views'),
      'vuexs': resolve('src/vuexs')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          publicPath: '../../'
        }
      }
    ]
  }
}

module.exports = vuxLoader.merge(webpackConfig, {
	plugins: ['vux-ui']
})
