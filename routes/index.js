var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});



router.get('/bootnav', function(req, res){
	res.render('bootnav', {});
});

router.get('/success', function(req, res){
	res.render('file-upload-success', {});
});


module.exports = router;
