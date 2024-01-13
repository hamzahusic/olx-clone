const express = require('express');
const { Op, fn, col } = require('sequelize');
const Artikal = require('../../models/artikal');
const router = express.Router();

router.get('/:searchString', async (req, res) => {

     const searchString = req.params.searchString.split(' ');


    const searchTerm1 = 'audi';
    const searchTerm2 = 'prodajem';

    const input = [
        { [Op.iLike]: `%${searchTerm1}%` },
        { [Op.iLike]: `%${searchTerm2}%` }
    ]

    console.log(searchString.map(value => ({ [Op.iLike] : `%${value}%` })))
    console.log("----------")
    console.log(input)
    const result = await Artikal.findAll({
    where: {
        naslov: {
        [Op.or]: input
        }
    }
    });


  return res.status(200).json(result);
});

module.exports = router;
