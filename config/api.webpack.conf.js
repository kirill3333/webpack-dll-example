'use strict'

const path = require('path');
const webpack = require('webpack');
const manifest = require('./../build/vendor-manifest.json');

module.exports = {
  entry: {
    api: './src/api/api.ts'
  },
  output: {
    filename: './build/api.js',
    libraryTarget: 'umd',
    library: 'api',
    umdNamedDefine: true
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },

  plugins: [new webpack.DllReferencePlugin({
    context: path.resolve('.'),
    manifest: manifest
  })],

  devtool: "source-map"
};