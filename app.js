
var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');
console.log("adam22217");
var session = require('express-session');
console.log("adam22218");
var MongoStore = require('connect-mongostore')(session);

mongoose.connect(config.db, config.options);
console.log("adam22219");
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('9775XX unable to connect to database at ' + config.db);
});
console.log("adam22220");
var models = glob.sync(config.root + '/app/models/*.js');
console.log("adam22221");
models.forEach(function (model) {
  require(model);
});
console.log("adam22222");
var app = express();
console.log("adam22223");
var express = require('./config/express')
console.log("adam22224");
if (process.env.NODE_ENV === 'development') {
  console.log("adam22225");
  store = new MongoStore({db: 'session'}, function(err) {
    app.use(session({
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

