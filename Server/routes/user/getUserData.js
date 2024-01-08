const express = require('express');
const Artikal = require('../../models/artikal');
const Slika = require('../../models/Slika');
const Korisnik = require('../../models/korisnik')

const router = express.Router();

router.post('/user/:id/:type',async (req,res) => {
    const userId = req.params.id
    const articleType = req.params.type

    if(!userId || !articleType){
        return res.status(403).json({
            message: "You need to provide userd id and type of article"
        })
    }

    const articleData = await Artikal.findAll({
        where:{
            idK:userId,
            proces:articleType
        },
        include:[  
            {
                model:Slika
            },
            {
                model:Korisnik
            }
        ]
    })

    if(articleData){
        return res.status(200).json(articleData)
    }
    else{
        return res.status(500).json({
            message:"Error getting user and article data"
        })
    }


})

module.exports = router;