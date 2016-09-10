module.exports = {
    reqAuthenticated: function(req) {
        if ((req.session.username === undefined) || (req.session.username === null)) {
            return false;
        } else {
            return true;
        }
    }
}
