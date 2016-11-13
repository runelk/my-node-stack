var express = require('express');
var router = express.Router();
var apiRouter = require('./api');
var webRouter = require('./web');

router.use('/', webRouter);
router.use('/api', apiRouter);

module.exports = router;
