const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.send('test 1 2 3!');
});




module.exports = router;