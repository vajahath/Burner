var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if ((req.session.username == undefined) || (req.session.username == null)) {
        res.render('index', {});
    } else {
        res.send("u are ready to go!");
    }
});

router.post('/', function(req, res) {
    if ((req.session.username == undefined) || (req.session.username == null)) {
        if (req.body.username && req.body.password) {
            var username = req.body.username;
            var password = req.body.password;
            if (logindata[username] == password) {
                res.send("yeah log in;");
                req.session.username = username;
            } else {
                res.send("ah snap.. thats incorrect..")
            }
        } else {
            res.send("F*** ! fill all fields.");
        }
    } else {
        res.send("u r logged in");
    }
});

// router.get('/dafaq', function(req, res){
// 	res.sendFile('drawer.html', { root: path.join(__dirname, '../views') });
// });

module.exports = router;

var logindata = {
    "assasin": "futhat"
}
