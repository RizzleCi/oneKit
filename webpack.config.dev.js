var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['webpack-hot-middleware/client','./entry.js']
  },
  output: {
    path: './dist',
    filename: '[name].js',
    publicPath: '/dist/'
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      disable: false,
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.tmpl'),
        inject: true,
        hash: false,
        filename: '../index.html',
        minify: false,
        favicon: false,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
    ]
  }
}
