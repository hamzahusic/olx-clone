const express = require('express');
const sequelize = require('../../db');
const Artikal = require('../../models/artikal');
const KategorijaVozilo = require('../../models/KategorijaVozilo');
const KategorijaCheckBoxDetalj = require('../../models/KategorijaCheckBoxDetalj');
const Slika = require('../../models/Slika');
const router = express.Router();

router.delete('/automobili/:id',async (req,res) => {

    const articleId = req.params.id;

    if(!articleId){
        return res.status(403).json({
            message:"You need to provide car id!"
        })
    }

    sequelize.transaction(async (t) => {
        // Step 1: Delete associated records from Artikal
        
          // Step 2: Delete associated records from Slika
          await Slika.destroy({
            where: {
              idA: articleId,
            },
            transaction: t,
          });
        
          // Step 3: Delete associated records from KategorijaCheckBoxDetalj
          await KategorijaCheckBoxDetalj.destroy({
            where: {
              idA: articleId,
            },
            transaction: t,
          });
        
          // Step 4: Delete the record in KategorijaVozilo
          await KategorijaVozilo.destroy({
            where: {
              idKV: articleId,
            },
            transaction: t,
          });

          await Artikal.destroy({
            where: {
              idA: articleId,
            },
            transaction: t,
          });
          
        
        res.status(200).json({
                message:"Successfully removed car",
                id:articleId
        })
      
      }).catch((error) => {
        res.status(500).json({
            message:"Error removing car details!",
            error:error,
            carId:articleId
        })
      });


})

module.exports = router;