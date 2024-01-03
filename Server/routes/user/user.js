const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/korisnik');
const validateJWToken = require('../../middleware/cookieJwtAuth');

router.post('/register', async (req, res) => {
   
    try {
    
    const {ime,prezime,email,sifra,adresa,broj_telefona,slika_link} = req.body;

    const userAvailable = await User.findOne({
      where:{
        email:email,
      },
    });

    if(userAvailable){
      console.log(userAvailable)
      return res.status(400).json({response : 'Email already exists!'})
    }
    
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(sifra, saltRounds);

    const user = await User.create({
        ime : ime,
        prezime : prezime,
        email : email,
        sifra : hashedPassword,
        adresa : adresa,
        broj_telefona : broj_telefona,
        zadnja_prijava : new Date(),
        slika_link : slika_link
    },
    {
        fields: ['ime', 'prezime', 'email', 'sifra', 'adresa', 'broj_telefona', 'zadnja_prijava', 'slika_link'],
    });

    const accessToken = jwt.sign({
      user:{
        ime:ime,
        prezime:prezime,
        email : email
      }
    },process.env.JWT_KEY,{expiresIn:'1h'})

    //Set cookie with accesstoken and it's httpsOnly
    res.cookie("JWT_TOKEN",accessToken,{
      httpOnly:true
    })

    res.status(201).json({
      response: 'User has been registered!',
      user: user.toJSON(),
    });
  } catch (error) {
    res.status(500).send({response : "Error during registration"});
  }
  
});

router.get('/all',validateJWToken,(req,res) => {
  
  res.status(200).send({message : "You can accesss all data",data : res.user});
})

router.post('/login',async (req,res) => {

  const {email,sifra} = req.body;

  if(!email || !sifra){
    return res.status(401).json({message : "Enter username or password"})
  }

  const userDetails = User.findOne({
    where:{
      email : email
    }
  })

  const userResult = await userDetails;

  if(!userResult)
    return res.status(401).json({message : "User doesn't exists"})
   
  const passwordMatch = await bcrypt.compare(sifra,userResult.sifra);

  if(!passwordMatch) 
    return res.status(401).json({message : "Wrong user details (password)"})
  
  const accessToken = jwt.sign({
      user:{
      ime:userResult.ime,
      prezime:userResult.prezime,
      email : userResult.email
    }
  },process.env.JWT_KEY,{expiresIn:'1h'})

  await User.update({
    zadnja_prijava:new Date(),
  },
  {
    where:{email:email}
  })


  //Set cookie with accestoken and it's httpsOnly
  res.cookie("JWT_TOKEN",accessToken,{
    httpOnly:true
  })

  return res.status(200).json({
    message : "User logged in",
    user : userResult
  })
})

module.exports = router;
