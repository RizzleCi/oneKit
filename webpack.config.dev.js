var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/entry.js']
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
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: 'css-loader',
        use: ExtractTextPlugin.extract({
          use:'css-loader'
        })
      },
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /(node_modules|quagga\.js)/,
        include: __dirname
      },
    ]
  }
}
