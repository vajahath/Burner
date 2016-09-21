var express = require('express');
var path = require('path');
var myutil = require('../custom_modules/myUtilities');

var router = express.Router();
/* GET home page. */
router.get('/', function(req, res){
	if(myutil.reqAuthenticated(req)){
		res.sendFile('index.html', { root: path.join(__dirname, '../public/trip/') });
	} else {
		res.send("Ah snap..! that's currently unavailable or u don't have that previllage!");
	}
});

router.get('/index', function(req, res) {
	res.render('trip/index', {});
});
router.get('/create', function(req, res) {
	res.render('trip/create-new-acc', {});
});
router.get('/myacc', function(req, res) {
	res.render('trip/myAccount', {});
});
router.get('/search', function(req, res) {
	res.render('trip/search', {});
});
router.get('/book', function(req, res) {
	res.render('trip/booking', {});
});


// router.get('/dafaq', function(req, res){
// 	res.sendFile('drawer.html', { root: path.join(__dirname, '../views') });
// });

module.exports = router;
