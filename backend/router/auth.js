const express = require("express")
const router = express.Router()
const {Users, validateUser} = require("../models/userSchema")
const bcrypt = require("bcrypt")

router.post("/", async(req,res)=>{
    try{
        let user = await Users.findOne({phoneNumber: req.body.phoneNumber})
        if(!user){
            return res.send("Bunday user mavjud emas")
        }
    
        let userValid = await bcrypt.compare(req.body.password, user.password)
    
        if(!userValid){
            return res.send("password or phone number is incorrect")
        }
        
        // let token = jwt.sign({phoneNumber: user.phoneNumber}, process.env.SECRET_KEY_TOKEN);

        res.status(200).json({
            user
        })
    }
      catch{
          res.send("xato")
          
      }
})



module.exports = router