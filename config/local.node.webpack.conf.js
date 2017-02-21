'use strict'

const path = require('path');
const helpers = require('./helpers');
const webpack = require('webpack');
const manifest = require('./../build/vendor-manifest.json');


module.exports = {
  entry: "./src/main.ts",
  target: 'node',
  output: {
    filename: './build/build.js'
  },

  resolve: {
    extensions: ['.js', '.ts'],
    modules: [
      "node_modules",
      path.resolve('./build')
    ],
    alias: {
        api: path.resolve('./build/api.js')
    }
  },

  externals: helpers.buildNodeExternals(),

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
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

  watch: false,
  devtool: "source-map"
}