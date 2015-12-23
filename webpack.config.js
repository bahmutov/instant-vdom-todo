var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  output: {
    path: './dist',
    filename: 'app.js'
  },
  entry: {
    app: './src/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}

module.exports.plugins = [
  new ExtractTextPlugin('app.css', {
    allChunks: true
  })
]
