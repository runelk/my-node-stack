var express = require('express');
var router = express.Router({mergeParams: true});

var examplesRouter = require('./examples.js');
console.log(examplesRouter);
router.use('/examples', examplesRouter);

router.route('/')
  .get(function(req, res) {
    res.json({ message: 'Hello there!' });
  });



module.exports = router;
