const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const {allUsers} = require("./api_functions/User/user")


const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

const port = process.env.PORT || 4000

app.post("/users/:id",allUsers)

app.get("/article/",async (req,res) => {

    try {
        console.log(req.query);
        res.send("Data is sent!");
    } catch (error) {
        res.status(404).send("No parameters!!!");
    }


})

app.listen(port,() => {console.log(port);})