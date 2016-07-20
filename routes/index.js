var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/delight', function(req, res){
	res.render('delight', {});
});

router.get('/register', function(req, res){
	res.render('register', {});
});

router.get('/wdf', function(req, res){
	res.sendFile('Work_Flow.html', { root: path.join(__dirname, '../views') });
});

router.get('/dafaq', function(req, res){
	res.sendFile('drawer.html', { root: path.join(__dirname, '../views') });
});

module.exports = router;
