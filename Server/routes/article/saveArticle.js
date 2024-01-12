const express = require('express');
const SpaseniArtikal = require('../../models/SpaseniArtikal');
const router = express.Router();

router.post('/:id',async (req,res) => {
    const articleId = req.params.id
    const {datum_spasavanja,idK} = req.body;

    if(!articleId || !datum_spasavanja || !idK){
        return res.status(403).json({
            message : "You need to provide article id!"
        })
    }

    try {
        
        const savedArticle = await SpaseniArtikal.create({
            datum_spasavanja : new Date(datum_spasavanja),
            idK : idK,
            idA : articleId
        },{
            fields:["datum_spasavanja", "idK", "idA"]
        })
    
        if(savedArticle){
            return res.status(200).json(savedArticle)
        }
    } catch (error) {
        return res.status(403).json({
            message: "Error saving car!"
        })
    }
})

module.exports = router;
