var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/trackly', function(req, res) {
  res.redirect('http://arthurhimmel.com:3000');
})

module.exports = router;
