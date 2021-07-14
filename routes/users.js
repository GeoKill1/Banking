var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/mainpage', function(req, res, next) {
  console.log(req);
  res.render("choose_account");

});
router.get('/register', function(req, res, next) {
  console.log(req);
  res.render("register");

});

router.get('/account/:type', function(req, res, next) {
  console.log(req.params.type);
  
  res.render("actions",{type:req.params.type});


});
// router.get('/balance', function(req, res, next) {
//   console.log(req);
//   res.render("balance");

// });
// router.get('/deposit', function(req, res, next) {
//   console.log(req);
//   res.render("deposit");

// });
// router.get('/withdraw', function(req, res, next) {
//   console.log(req);
//   res.render("withdraw");

// });

module.exports = router;
