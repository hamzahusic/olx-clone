const allUsers = (req,res) => {
    console.log(req.params.id)
    res.json([{"name" : "User1","pass" : req.params.id}])
}

module.exports = {allUsers};