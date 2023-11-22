const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const userAuth = require("./routes/user/user")

const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

const port = process.env.PORT || 4000

app.use("/api/auth",userAuth)

app.listen(port,() => {console.log(port);})