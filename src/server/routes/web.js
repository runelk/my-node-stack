var express = require('express');
var router = express.Router({mergeParams: true});

var models = require('../database/sequelize/models');

router.route('/')
  .get(function(req, res) {
    res.render('index', {
      heading: 'Why hello there...!',
      bundle: 'index'
    });
  });

router.route('/examples')
  .get(function(req, res) {
    models.Example.findAll().then(function(examples) {
      res.render('examples', {
        heading: 'Some Examples',
        examples: examples,
        bundle: 'index'
      });
    });
  });

module.exports = router;
