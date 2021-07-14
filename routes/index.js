var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome');
});
router.post('/register', function(req, res, next) {
  console.log(req.body)
  res.render('register');
});

module.exports = router;
