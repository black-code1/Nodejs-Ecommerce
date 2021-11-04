const router = require("express").Router()

router
  .get('/userTest', (req, res) => {
    res.send("userText")
  })

router
  .post("/userposttest", (req, res) => {
    const username = req.body.username
    console.log(username)
  })

module.exports = router