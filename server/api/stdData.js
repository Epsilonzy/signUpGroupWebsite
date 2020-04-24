const express = require('express');
const router = express.Router();
const mongo = require('../mongo/std');

// 这里的路由会是app.use('url')中的url+'/'
router.get('/', (req, res) => {
    mongo.students.find({}, (err, docu) => {
        if (err) throw err;
        let data = {
            length: docu.length,
            stdDataArr: docu
        }
        res.send(data);
    })
})

module.exports = router;