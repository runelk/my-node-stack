var express = require('express');

module.exports = function(dir_public, dir_views) {
  var port = process.env.SERVER_PORT;
  var app = express();
  var router = require('./routes');

  app.use(express.static(dir_public));
  app.set('view engine', 'ejs');
  app.set('views', dir_views);
  app.use('/', router);

  app.listen(port, function() {
    console.log(`Express server listening on port ${port}`);
  });

  return app;
};
