'use strict'

const path = require('path');
const webpack = require('webpack');
const manifest = require('./../build/vendor-manifest.json');


module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: './build/build.js'
  },

  resolve: {
    extensions: ['.js', '.ts'],
    modules: [
      path.resolve('./src'),
      "node_modules",
      path.resolve('./build')
    ]
  },

  externals: {
    'api': 'api'
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