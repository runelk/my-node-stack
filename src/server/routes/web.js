var express = require('express');
var router = express.Router({mergeParams: true});

router.route('/')
  .get(function(req, res) {
    res.render('index', {
      heading: 'Why hello there...!',
      bundle: 'index'
    });
  });

router.route('/examples')
  .get(function(req, res) {
    res.send("Examples galore in a bit!");
  });

module.exports = router;
