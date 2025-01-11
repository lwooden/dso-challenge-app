const express = require("express")

const router = new express.Router()

router.get("/", (req, res) => {
  res.status(200).send("The Sample Node API Service is healthy!")
})

module.exports = router
