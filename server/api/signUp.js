const express = require('express');
const router = express.Router();
const mongo = require('../mongo/std');

// 这里的路由会是app.use('url')中的url+'/'
router.post('/', (req, res) => {
    mongo.students.findOne({ stdId: req.body.stdId }, (err, docu) => {
        if (err) throw err;
        if (docu === null || docu === undefined) {
            new mongo.students(req.body).save((err, docu) => {
                if (err) throw err;
                res.send({ status: true });
            })
        } else {
            res.send({ status: false, content: "不允许重复提交!" });
        }
    })
})

module.exports = router;