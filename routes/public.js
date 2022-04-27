const express = require('express')
const axios = require('axios').default


const router = new express.Router() 


router.get('/', async (req, res) => { 

 axios.get('https://cat-fact.herokuapp.com/facts/random')
 .then((response) => {
    res.send(response.data)
    console.log(res)})
 .catch((error) => console.log(error))



})


module.exports = router