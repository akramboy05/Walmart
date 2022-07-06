const express = require("express")
const router = express.Router()
const {Filas} = require("../models/Files")



router.post("/", async(req, res)=>{
    let fileName = req.query.fileName
    let files = await Filas.find()

    let filterName = users.filter(i=> i.fileName.includes(fileName)).slice(0, 10)

    res.json(filterName)
})

module.exports = router