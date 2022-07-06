const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
require("dotenv").config()
const User = require("./router/user")
const files = require('./router/files')
const secondFiles = require("./router/secondFiles")
const brand = require("./router/Brand")
const searchName = require("./router/nameSearch")
const Auth = require("./router/auth")


app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://akramboy05:949111180@cluster0.vhabo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(()=> console.log("Mongodb is connected"))
    .catch(()=> console.log("Mongodb is not connected"))

app.use("/profiles", User)
app.use('/create', files)
app.use('/second',secondFiles)
app.use('/brand',brand)
app.use("/search", searchName)
app.use("/auth", Auth)


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(PORT + " port is listened");
})

