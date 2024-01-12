const express = require('express');
const SpaseniArtikal = require('../../models/SpaseniArtikal');
const Artikal = require('../../models/artikal');
const Slika = require('../../models/Slika');
const router = express.Router();

router.get('/:userId/:articleId', async (req,res) => {
    const userId = req.params.userId
    const articleId = req.params.articleId

    if(!userId || !articleId){
        return res.status(403).json({
            message:"You need to provide user id and article id!"
        })
    }

    const savedArticleData = await SpaseniArtikal.findOne({
        where : {
            idA : articleId,
            idK : userId
        }
    })

    return res.status(200).json(savedArticleData || [])
    
})

router.get('/:userId', async (req,res) => {
    const userId = req.params.userId

    if(!userId){
        return res.status(403).json({
            message:"You need to provide user id"
        })
    }

    const savedArticleData = await SpaseniArtikal.findAll({
        where : {
            idK : userId
        },
        include:[
            {
                model : Artikal,
                include : [
                    {
                        model : Slika
                    }
                ]
            }
        ]
    })

    return res.status(200).json(savedArticleData)

})

module.exports = router