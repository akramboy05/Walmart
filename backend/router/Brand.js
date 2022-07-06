const express = require('express');
const Files  =  require('../models/Brand')

const files = express.Router();

files.post('/brandProducts', async (req, res) => {
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

files.get('/brandProducts/all' , async (req, res) => {
    const allFiles = await Files.find({type:"brandProducts"})
    try{
        res.json(allFiles)
    }
    catch(err) {
        res.send('Topilmadi')
    }
})

files.get("/brandProducts/:id", async (req, res) => {
    if(req.params.id.match(/^[0-9a-fA-F]{24}$/)){
        const allProduct = await Files.findById(req.params.id);
        try {
            res.json(allProduct);
          } catch (err) {
            res.send("No results!");
          }
    }
  });


files.post("/search", async (req, res) => {
    try {
      await Files.aggregate([
        {
          $search: {
            index: "default",
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
