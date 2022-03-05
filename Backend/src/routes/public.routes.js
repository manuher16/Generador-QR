const router = require('express').Router();
router.post('/', (req, res) => {
    console.log(req)
    res.send('index');
})

module.exports = router