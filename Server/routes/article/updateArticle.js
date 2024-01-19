const express = require('express');
const Artikal = require('../../models/artikal');
const router = express.Router();

router.post('/automobili/:id/finish', async (req,res) => {
    
    const carId = req.params.id

    if(!carId){
        return res.status(403).json({
            message : "You need to provide car id!"
        })
    }
    try {
        const updatedData = await Artikal.update({proces : "Zavrsen"},{
            where : {
                idA : carId,
            }
        })
        
        res.status(200).json(updatedData)

    } catch (error) {
        res.status(404).json({message : "Error updating car"})
    }
})

module.exports = router