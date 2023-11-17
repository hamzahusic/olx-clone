const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const {allUsers} = require("./api_functions/user")

const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

const port = process.env.PORT || 4000

app.post("/users/:id",allUsers)

app.listen(port,() => {console.log(port);})