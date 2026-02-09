const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.send('<H1>TEST BE TEST</H1>');
});




module.exports = router;