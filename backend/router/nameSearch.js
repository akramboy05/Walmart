const express = require("express")
const router = express.Router()
const {Filas} = require("../models/Files")

router.post("/", async(req, res)=>{
    let name = req.query.fileName
    let users = await Filas.find()

    let filterUser = users.filter(i=> i.fileName.includes(name)).slice(0, 10)

    res.json(filterUser)
})

module.exports = router