'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var models = require('../models');

    return models.Example.bulkCreate([
      {
        name: 'Google',
        text: 'Yup, a link to Google',
        url: 'https://www.google.com/'
      },
      {
        name: 'Hacker News',
        text: 'My main pretend-its-not-procrastination page',
        url: 'https://news.ycombinator.com/'
      },
      {
        name: 'Reddit',
        text: 'My main procrastination page',
        url: 'https://www.reddit.com/'
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Examples', null, {});
  }
};
