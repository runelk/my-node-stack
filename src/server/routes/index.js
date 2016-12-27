var express = require('express');

var router = express.Router({mergeParams: true});
var apiRouter = require('./api');
var webRouter = require('./web');

router.use('/', webRouter);
router.use('/api', apiRouter);

module.exports = router;
