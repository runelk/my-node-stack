
module.exports = function(dir_public, dir_views) {
  var express = require('express');
  var bodyParser = require('body-parser');
  var router = require('./routes');

  var port = process.env.SERVER_PORT;

  var app = express();
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.set('view engine', 'pug');
  app.set('views', dir_views);
  app.use(express.static(dir_public));
  app.use('/', router);

  app.listen(port, function() {
    console.log(`Express server listening on port ${port}`);
  });

  return app;
};
