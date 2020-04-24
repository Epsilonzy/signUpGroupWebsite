const express = require('express');
const key = require('../config/key.json');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongo = require('../mongo/user');

router.post('/', (req, res) => {
    mongo.users.findOne({ userId: req.body.userId }, (err, docu) => {
        if (err) throw err;
        let token = jwt.sign(req.body.userId, key.firstKey);
        global.userToken[req.body.userId] = token;
        console.log(global.userToken);
        if (docu != undefined || docu != null) {
            if (docu.password == req.body.password) {
                res.send({ status: true, token: token });
            } else {
                res.send({ status: false });
            }
        } else {
            res.send({ status: false });
        }
    })
})

module.exports = router;