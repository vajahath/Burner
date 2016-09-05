var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
	res.sendFile('index.html', { root: path.join(__dirname, '../public/trip/') });
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


// router.get('/dafaq', function(req, res){
// 	res.sendFile('drawer.html', { root: path.join(__dirname, '../views') });
// });

module.exports = router;
