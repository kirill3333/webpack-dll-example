'use strict'

const path = require('path');
const fs = require('fs');
const _ = require('lodash');

function buildNodeExternals(externals) {
  let nodeModules = {};
  fs.readdirSync('node_modules')
    .filter(function (x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
      nodeModules[mod] = 'commonjs ' + mod;
    });

  if (externals && _.isPlainObject(externals)) {
    _.extend(nodeModules, externals);
  }

  return nodeModules;
}

module.exports = {
  buildNodeExternals
}