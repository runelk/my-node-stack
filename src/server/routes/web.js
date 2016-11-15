var express = require('express');
var router = express.Router({mergeParams: true});

var models = require('../database/sequelize/models');
var faker = require('faker');

var navbar_items = [
  { url: '/', text: 'Home' },
  { url: '/about', text: 'About' },
  { url: '/news', text: 'News' },
  { url: '/examples', text: 'Examples' },
  { url: '/app', text: 'App' },
];

router.route('/')
  .get(function(req, res) {
    res.render('index', {
      title: 'Nodidodidooo',
      heading: 'My Node Stack',
      phrase: faker.company.catchPhrase(),
      bundle: 'index',
      navbar: navbar_items,
      faker: faker
    });
  });

router.route('/examples')
  .get(function(req, res) {
    models.Example.findAll().then(function(examples) {
      res.render('examples', {
        title: 'Examples',
        heading: 'Examples',
        phrase: faker.company.catchPhrase(),
        bundle: 'index',
        navbar: navbar_items,
        examples: examples
      });
    });
  });

router.route('/app')
  .get(function(req, res) {
    res.render('app', {
      title: 'App Example',
      heading: 'App Example',
      phrase: 'Using React aight?',
      bundle: 'index',
      navbar: navbar_items
    });
  });



module.exports = router;
