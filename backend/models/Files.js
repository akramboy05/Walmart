const mongoose = require('mongoose');

const Filessch = new mongoose.Schema({
    fileName : {
        type : String,
        required : true
    },
    fileImage:{
        type:String,
        required: true
    },
    fileText:{
        type:String,
        required: true
    },
})

const Filas = mongoose.model("Products", Filessch);
module.exports = Filas