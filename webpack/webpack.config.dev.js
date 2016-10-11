var webpack = require('webpack');


module.exports = {
  entry: {
    app:  './src/app/App.js'
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: 'dist/'
  },
  watch: true,
  devtool: 'source-map',
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
  }
}
