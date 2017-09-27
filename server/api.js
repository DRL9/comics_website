const express = require('express')
    ;

var router = express.Router();

router.use(/.+/, (req, res) => {
    res.statusCode = 404;
    res.end();
})

module.exports = router;