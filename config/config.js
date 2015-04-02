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
    host: 'mongodb://heroku_app35382791:ojbt01f0g98pr8ks7tvbuo8vit@ds035557.mongolab.com:3557/heroku_app3582791',
    db: 'mongodb://Torkelsson:Torkelsson@ds059661.mongolab.com:59661/esanadatabase'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'cetas'
    },
    port: 3000,
    db: 'mongodb://Torkelsson:Torkelsson@ds059661.mongolab.com:59661/esanadatabase'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'cetas'
    },
    port: 3000,
    db: 'mongodb://Torkelsson:Torkelsson@ds059661.mongolab.com:59661/esanadatabase'

  }
};

module.exports = config[process.env.NODE_ENV];
