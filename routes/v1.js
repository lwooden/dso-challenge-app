const express = require('express')
const axios = require('axios').default

const router = new express.Router() 


router.get('/echo', (req, res) => {
    let term = req.query.term
    res.status(200).send({
        message: `You said: ${term}!`
    })
})


router.get('/env', (req, res) => {
    let env = process.env.ENV

    if (!env) {
        res.status(404).send("ENV is not set!")
    } else {
        res.status(200).send({
            message: `Looks like you are running in a ${env} environment!`
        })
    } 
})


router.post('/sum', (req, res) => {
    let sum = req.body.val1 + req.body.val2

    res.status(200).send({
        sum: sum
    })
    
})

router.get('/pokemon/:id', async (req, res) => { 
    let id = req.params.id
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
       res.send({id: response.data.id,
               name: response.data.name,
               base_experience: response.data.base_experience
                })
    //    console.log(res)
    })
    .catch((error) => console.log(error))

   })

router.get('/kubernetes', (req, res) => {

    let nodeName = process.env.NODE_NAME
    let podName = process.env.POD_NAME
    let podIp = process.env.POD_IP
    let podNamespace = process.env.POD_NAMESPACE
    let podService = process.env.POD_SERVICE

    res.status(200).send({
        nodeName,
        podName,
        podIp,
        podNamespace,
        podService
    })

})


module.exports = router