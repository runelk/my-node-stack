var express = require('express');

module.exports = function(dir_public) {
  var port = process.env.SERVER_PORT;
  var app = express();
  var router = require('./routes');

  app.use(express.static(dir_public));
  app.use('/', router);

  app.listen(port, function() {
    console.log(`Express server listening on port ${port}`);
  });

  return app;
};
