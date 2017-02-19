'use strict'

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['async', 'lodash'],
  },

  output: {
    path: './build',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },

  plugins: [new webpack.DllPlugin({
    context: path.resolve('.'),
    name: '[name]',
    path: 'build/[name]-manifest.json',
  })]
};