const express = require('express')


const router = new express.Router() 


router.get('/', (req, res) => { 

    fact = [
        {
            fact: "At the age of 4 weeks, most dogs have developed the majority of their vocalizations."
        }
    ]

    res.send(fact)
    

    
})


module.exports = router