'use strict'

const path = require('path');
const webpack = require('webpack');
const manifest = require('./../build/vendor-manifest.json');
const helpers = require('./helpers');


module.exports = {
  entry: {
    api: './src/api/api.ts'
  },
  target: 'node',
  output: {
    filename: './build/api.js',
    libraryTarget: 'umd',
    library: 'api',
    umdNamedDefine: true
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  externals: helpers.buildNodeExternals(),

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

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },

  devtool: "source-map"
};