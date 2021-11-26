const express = require('express')
const axios = require('axios').default


const router = new express.Router() 


router.get('/', async (req, res) => { 

 axios.get('https://cat-fact.herokuapp.com/facts')
 .then((response) => {
    res.send(response.data[0])
    console.log(res)})
 .catch((error) => console.log(error))



})


module.exports = router