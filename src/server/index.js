
module.exports = function(dir_public, dir_views) {
  // Node modules
  var express = require('express');

  // Local imports
  var router = require('./routes');

  var port = process.env.SERVER_PORT;

  var app = express();
  app.use(express.static(dir_public));
  app.set('view engine', 'pug');
  app.set('views', dir_views);
  app.use('/', router);

  app.listen(port, function() {
    console.log(`Express server listening on port ${port}`);
  });

  return app;
};
