const express = require('express');
const Files  =  require('../models/Files')

const files = express.Router();

files.post('/products', async (req, res) => {
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

files.get('/bannerProducts' , async (req, res) => {
    const allFiles = await Files.find({type: "bannerProducts"})
    try{
        res.json(allFiles)
    }
    catch(err) {
        res.send('Topilmadi')
    }
})

files.get('/bannerProducts/:id' , async (req, res) => {
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



files.post("/search", async (req, res) => {
    try {
      await Files.aggregate([
        {
          $search: {
            index: "brands",
            text: {
              query: req.body.fileText,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ])
        .limit(10)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.send(err));
    } catch (err) {
      res.send(404).json("Sertifikat topilmadi");
    }
  });

module.exports = files




