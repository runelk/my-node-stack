var express = require('express');

function setupRoutes(app) {
  app.get('/', function(req, res) {
    res.send("Hellooooo!");
  });
  return app;
}

module.exports = function() {
  var port = process.env.SERVER_PORT;
  var app = setupRoutes(express());

  app.listen(port, function() {
    console.log(`Express server listening on port ${port}`);
  });

  return app;
};
