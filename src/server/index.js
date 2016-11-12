var express = require('express');

function setupRoutes(app) {
  app.get('/', function(req, res) {
    res.sendFile('index.html');
  });
}

module.exports = function(dir_public) {
  var port = process.env.SERVER_PORT;
  var app = express();
  app.use(express.static(dir_public));
  setupRoutes(express());

  app.listen(port, function() {
    console.log(`Express server listening on port ${port}`);
  });

  return app;
};
