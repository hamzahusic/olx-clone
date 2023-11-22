const express = require("express")
const router = express.Router();
const bcrypt = require("bcrypt")

const pool = require("../../db")

router.post("/register",(req,res,next) => {
    if(req.body.api_key == process.env.API_KEY){
        const saltRounds = 10
        bcrypt.hash(req.body.sifra,saltRounds)
        .then((sifra) => 
            pool.query(
                'INSERT INTO "Korisnik" (ime,prezime,email,sifra,adresa,broj_telefona,zadnja_prijava,slika_link) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
                [req.body.ime,req.body.prezime,req.body.email,sifra,req.body.adresa,req.body.broj_telefona,new Date(),req.body.slika_link]
                ,(error,result) => {
                    if(error) throw error

                    res.status(200).send("User has been registered!")
                    console.log(result)
                })
        ) 
    }
    else{
     res.status(405).send("You dont have access to this page")
    }
     
})

module.exports = router

