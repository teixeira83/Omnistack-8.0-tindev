const Dev = require('../models/Dev');

module.exports = {
    
    store(req, res) {
        console.log('params: ' + req.params.devId);
        console.log('usuario: ' + req.headers.user);
        return res.json({ ok : true});
    }
};