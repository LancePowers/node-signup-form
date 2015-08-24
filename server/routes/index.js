var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Signup' });
});
router.post('/submit', function(req, res, next){
  res.render('index', { title: 'success!' });
});
module.exports = router;
