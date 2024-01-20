const express = require('express');
const { Op } = require('sequelize');
const Artikal = require('../../models/artikal');
const Slika = require('../../models/Slika');
const KategorijaVozilo = require('../../models/KategorijaVozilo');
const router = express.Router();

router.post('/', async (req, res) => {
    
    const { input } = req.body

    console.log(input)

    if(!input)
        return res.status(404).json({message : "Need to provide input value"})

    const searchValue = input.split(' ').map(value => ({ [Op.iLike] : `%${value}%` }))

    const result = await Artikal.findAll({
        where: {
            [Op.or] : [
                {naslov: {[Op.or]: searchValue}},
                {'$KategorijaVozilo.proizvodjac$': {[Op.or]: searchValue}},
                {'$KategorijaVozilo.model$': {[Op.or]: searchValue}},
            ],
            proces : "Aktivan"
        },
        include : [
            {
                model : Slika
            },
            {
                model: KategorijaVozilo,
            }
        ],
    });


  return res.status(200).json(result);
});

module.exports = router;
