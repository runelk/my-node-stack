var express = require('express');
var router = express.Router({mergeParams: true});

var examplesRouter = require('./examples.js');
router.use('/examples', examplesRouter);

router.route('/')
  .get(function(req, res) {
    res.json({ message: 'Hello there!' });
  })
  .post(function(req, res) {
    res.json(req.body);
  });



module.exports = router;
