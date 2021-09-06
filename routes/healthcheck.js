const express = require('express')

const router = new express.Router() 

router.get('/', (req, res) => {
    res.status(200).send("The Node Mock API Service is healthy!")
})


module.exports = router