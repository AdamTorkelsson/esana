
var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongostore')(session);

mongoose.connect(config.db, config.options);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('9775XX unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();

var express = require('./config/express')

if (process.env.NODE_ENV === 'development') {
  console.log("adam22221");
  console.log();
  store = new MongoStore({db: 'session'}, function(err) {
    app.use(session({
      host: 'mongodb://Torkelsson:Torkelsson@ds059661.mongolab.com:59661/esanadatabase',
      secret: 'itsfridayfriday',
      store: store,
      saveUninitialized: true,
      resave: true
    }));
    console.log("adam22225");
    express.init(app, config, session);
    app.listen(config.port);
    console.log('The magic happens on port ' + config.port);
  })
}

else if (process.env.NODE_ENV === 'test') {
  app.use(session({
      secret: 'itsfridayfriday',
      saveUninitialized: true,
      resave: true
    }));
  express.init(app, config, session);
  app.listen(config.port);
  module.exports = app;
}

else if(process.env.NODE_ENV === 'production'){

  store = new MongoStore({'db': 'session'}, function(err) {
    app.use(session({

      secret: 'itsfridayfriday',
      store: store,
      saveUninitialized: true,
      resave: true
    }));
    express.init(app, config, session);
    app.listen(config.port);
    console.log('The magic happens on port ' + config.port);
  })
}

