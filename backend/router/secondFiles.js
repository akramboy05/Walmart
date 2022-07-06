const express = require('express');
const Files  =  require('../models/secondFiles')

const files = express.Router();

files.post('/secondProducts', async (req, res) => {
    try{
        const file  = new Files({
            fileName : req.body.fileName,
            fileText:req.body.fileText,
            fileImage: req.body.fileImage,
        })
        await file.save()
        res.json(file)
    }
    catch(err){
        res.send(err)
    }
})



module.exports = files

files.get('/secondProducts/all' , async (req, res) => {
    const allFiles = await Files.find({type:"secondProducts"})
    try{
        res.json(allFiles)
    }
    catch(err) {
        res.send('Topilmadi')
    }
})

files.get('/secondProducts/:id' , async (req, res) => {
    if(req.params.id.match(/^[0-9a-fA-F]{24}$/)){
        const a = await Files.findById({_id: req.params.id})
        try{
            res.json(a)
        }
        catch(err) {
            res.send('Topilmadi')
        }
    }
})

