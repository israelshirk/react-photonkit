var webpack = require('webpack');
var path = require('path');

module.exports = {
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.coffee$/,
      exclude: /node_modules/,
      loader: 'coffee-loader'
    }, {
      test: /\.cjsx$/,
      exclude: /node_modules/,
      loaders: ['coffee', 'cjsx']
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=1000000&mimetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  },
  entry: path.resolve(__dirname, 'src/photon.coffee'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'photon.js',
    library: 'ReactPhotonKit',
    libraryTarget: 'umd'
  },
  externals: [
    'react',
    'react-dom'
  ]
};
