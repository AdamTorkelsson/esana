var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'cetas'
    },
    port: 3000,
    db: 'mongodb://heroku_app35382791:heroku_app35382791@ds035557.mongolab.com:35557/heroku_app35382791'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'cetas'
    },
    port: 3000,
    db: 'mongodb://heroku_app35382791:heroku_app35382791@ds035557.mongolab.com:35557/heroku_app35382791'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'cetas'
    },
    port: 3000, //mongolab kolla upp.
    db: 'mongodb://heroku_app35382791:heroku_app35382791@ds035557.mongolab.com:35557/heroku_app35382791'

  }
};

module.exports = config[process.env.NODE_ENV];
