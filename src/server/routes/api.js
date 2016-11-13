var express = require('express');
var router = express.Router({mergeParams: true});

var models = require('../database/sequelize/models');

router.route('/')
  .get(function(req, res) {
    res.json({ message: 'Hello there!' });
  });

router.route('/examples')
  .get(function(req, res) {
    models.Example.findAll().then(function(examples) {
      res.json(examples);
    });
  });

router.route('/examples/:id')
  .get(function(req, res) {
    models.Example.findById(req.params.id).then(function(example) {
      res.json(example);
    });
  });

module.exports = router;
