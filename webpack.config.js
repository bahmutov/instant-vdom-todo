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
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
}

module.exports.plugins = [
  new ExtractTextPlugin({
    filename: 'app.css',
    disable: false,
    allChunks: true
  })
]
