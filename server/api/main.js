var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    global.num++;
    let num = global.num;
    console.log(global.num);
    res.send(`${num}`);
})

module.exports = router;