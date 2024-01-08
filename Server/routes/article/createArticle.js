const express = require('express');
const sequelize = require('../../db');
const Artikal = require('../../models/artikal');
const KategorijaVozilo = require('../../models/KategorijaVozilo');
const Slika = require('../../models/Slika');
const KategorijaCheckBoxDetalj = require('../../models/KategorijaCheckBoxDetalj');
const router = express.Router();

router.post('/automobili', async (req,res) => {
    
    const {
        proizvodjac,model,kilometraza,broj_vrata,godiste,kubikaza,
        kilovata,gorivo,konjskih_snaga,tip,transmisija,registrovan_do,
        velicina_felgi,euro,pogon,mjesta,naslov,datum_promjene,lokacija,
        dostupno,stanje,cijena,opis,slika,detalji_checkbox,idK,proces
    } = req.body

    try {
        await sequelize.transaction(async (t) => {
    
            const car = await KategorijaVozilo.create(
                {
                    proizvodjac:proizvodjac,
                    model:model,
                    kilometraza:kilometraza,
                    broj_vrata:broj_vrata,
                    godiste:godiste,
                    kubikaza:kubikaza,
                    kilovata:kilovata,
                    gorivo:gorivo,
                    konjskih_snaga:konjskih_snaga,
                    tip:tip,
                    transmisija:transmisija,
                    registrovan_do:new Date(registrovan_do),
                    velicina_felgi:velicina_felgi,
                    euro:euro,
                    pogon:pogon,
                    mjesta:mjesta
                },{
                    fields:["proizvodjac", "model", "kilometraza", "broj_vrata", "godiste", "kubikaza",
                    "kilovata", "gorivo", "konjskih_snaga", "tip", "transmisija", "registrovan_do",
                    "velicina_felgi", "euro", "pogon", "mjesta"],
                    transaction:t
                }
            )
    
            const createdCarId = car.idKV
    
            const article = await Artikal.create({
                naslov:naslov,
                datum_promjene:new Date(datum_promjene),
                lokacija:lokacija,
                dostupno:dostupno,
                stanje:stanje,
                cijena:cijena,
                opis:opis,
                idKV:createdCarId,
                idK:idK,
                proces:proces
            },{
                fields:["naslov", "datum_promjene", "lokacija", "dostupno", "stanje", "cijena", "opis","idKV","idK","proces"],
                transaction:t
            })
    
            const createdArticleId = article.idA;
    
            await Promise.all(
                detalji_checkbox.map(async (detalj) => {
                    await KategorijaCheckBoxDetalj.create(
                        {
                            vrijednost_checkboxa : detalj,
                            idA:createdArticleId
                        },{
                            fields:["vrijednost_checkboxa","idA"]
                        }
                    )
                })
            )

            await Promise.all(
                slika.map(async (img) => {
                    await Slika.create({
                        slika_link:img,
                        idA:createdArticleId
                    },{
                        fields:["slika_link","idA"],
                        transaction:t
                    })
                })
            );
            


            res.status(200).json({
                message:"Car created!",
                id : createdArticleId
            })
        })
    } catch (error) {
        res.status(401).json({
            message:"Error creating car!",
        })
    }

})

module.exports = router;