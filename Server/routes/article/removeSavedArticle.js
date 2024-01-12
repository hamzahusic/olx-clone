const express = require('express');
const SpaseniArtikal = require('../../models/SpaseniArtikal');
const router = express.Router();

router.delete('/:id',async (req,res) => {
    const articleId = req.params.id

    const {idK} = req.body

    if(!articleId){
        return res.status(403).json({
            message : "You need to provide article id!"
        })
    }

    try {
        
        await SpaseniArtikal.destroy({
            where:{
                idA :articleId,
                idK : idK
            }
        })
    
        return res.status(200).json({
            id: articleId
        })
        
    } catch (error) {
        return res.status(403).json({
            message: "Error saving car!"
        })
    }
})

module.exports = router;
