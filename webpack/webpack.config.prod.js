var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    app:  './src/app/App.js'
  },
  output: {
    publicPath: '/',
    filename: '[name].min.js',
    path: 'dist'
  },
  module: {
    loaders: [
      {
        test: /\.hbs$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },{
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style!css!resolve-url!sass?sourceMap'
      },{
        test: /\.(jpg|png|gif|)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file?name=[name].[ext]'
      },{
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ]
}
