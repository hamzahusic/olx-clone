const express = require('express');
const router = express.Router();
const Artikal = require('../../models/artikal');
const KategorijaVozilo = require('../../models/KategorijaVozilo');
const KategorijaCheckBoxDetalj = require('../../models/KategorijaCheckBoxDetalj');
const Slika = require('../../models/Slika');
const Korisnik = require('../../models/korisnik');

router.get('/automobili/:id', async (req,res) => {
    
    const carId = req.params.id;

    if(!carId)
        return res.status(404).json({
            message:"You need to provide car id!"
        })
    
    const articleData = await Artikal.findAll({
        where:{
            idA:carId
        },
        include:[
            {
                model:KategorijaVozilo,
            },
            {
                model:KategorijaCheckBoxDetalj
            },
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
            message:"Error finding car details!",
            id:carId
        })
    }
})


router.get('/:userId/items/:itemNum', async (req,res) => {
    const numberOfItems = req.params.itemNum
    const userId = req.params.userId

    if(!numberOfItems || !userId)
        return res.status(403).json({
            message:"You need to provide number of items"
    })

    const articleData = await Artikal.findAll({
        where:{
            idK:userId
        },
        limit:numberOfItems || false,
        include:[  
            {
                model:Slika
            }
        ]
    })

    if(articleData){
        return res.status(200).json(articleData)
    }
    else{
        return res.status(500).json({
            message:"Error getting article data"
        })
    }
})

router.get('/all/article/:numberOfArticle', async (req,res) => {
    const numberOfArticle = req.params.numberOfArticle

    if(!numberOfArticle){
        return res.status(403).json({
            message:"You need to provide number of items"
        })
    }

    const articleData = await Artikal.findAll({
        limit:numberOfArticle,
        include:[  
            {
                model:Slika
            }
        ]
    })

    if(articleData){
        return res.status(200).json(articleData)
    }
    else{
        return res.status(500).json({
            message:"Error getting article data"
        })
    }

})

module.exports = router;