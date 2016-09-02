var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {});
});

router.get('/tripped', function(req, res) {
	res.render('trip/index', {});
});


// router.get('/dafaq', function(req, res){
// 	res.sendFile('drawer.html', { root: path.join(__dirname, '../views') });
// });

module.exports = router;
