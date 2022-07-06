const mongoose = require("mongoose")
const Joi = require("joi")

let userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: String,
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type:String,
        required: true
    },
})

const Users = mongoose.model("profiles", userSchema)

const validateUser = (body)=>{
    let user = Joi.object({
        fname: Joi.string().min(3).required(),
        lname: Joi.string(),
        password: Joi.string().required().min(8).max(50),
        phoneNumber: Joi.string().required(),
    })

    return user.validate(body)
}

exports.Users = Users
exports.validateUser = validateUser

