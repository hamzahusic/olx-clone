const express = require('express');
const router = express.Router();

router.post('/automobili', async (req,res) => {
    return res.status(200).send("Article updated")
})

module.exports = router