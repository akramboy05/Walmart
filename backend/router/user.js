const express = require("express")
const router = express.Router()
const {Users, validateUser} = require("../models/userSchema")
const bcrypt = require("bcrypt")

router.get("/", async(req, res)=>{
    let users = await Users.find()
    res.status(200).json(users)
})
router.post("/", async(req, res)=>{
    let {error} = validateUser(req.body)
    if(error){
        return res.send(error.details[0].message)
    }

    let validUser = await Users.findOne({phoneNumber: req.body.phoneNumber})
    if(validUser){
        return res.send("This phone number is already exist")
    }

    let newUser = new Users({
        fname: req.body.fname,
        lname: req.body.lname ? req.body.lname : "",
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
    })

    let salt = await bcrypt.genSalt(10)
    newUser.password = await bcrypt.hash(newUser.password, salt)
    newUser = await newUser.save()

    res.status(200).json({newUser})
})


module.exports = router


