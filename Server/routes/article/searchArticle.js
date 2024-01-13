const express = require('express');
const { Op } = require('sequelize');
const Artikal = require('../../models/artikal');
const Slika = require('../../models/Slika');
const router = express.Router();

router.post('/', async (req, res) => {
    
     const searchString = req.body.input.split(' ');

    const input = searchString.map(value => ({ [Op.iLike] : `%${value}%` }))

    const result = await Artikal.findAll({
        where: {
            naslov: {
                [Op.or]: input
            }
        },
        include : [
            {
                model : Slika
            }
        ]
    });


  return res.status(200).json(result);
});

module.exports = router;
