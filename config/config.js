'use strict';
var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-v2b'
    },
    port: 3000,
    db: 'mongodb://localhost/localDB'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-v2b'
    },
    port: 3000,
    db: 'mongodb://localhost/test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-v2b'
    },
    port: 3000,
    db: 'mongodb://localhost/production'
  }
};

module.exports = config[env];
