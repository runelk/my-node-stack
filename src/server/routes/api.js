var express = require('express');
var router = express.Router({mergeParams: true});

router.route('/')
  .get(function(req, res) {
    res.json({ message: 'Hello there!' });
  });

router.route('/examples')
  .get(function(req, res) {
    res.json({ message: 'Some examples here please!' });
  });

module.exports = router;
