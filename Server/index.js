const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const userAuth = require("./routes/user/user")
const cookieParser = require("cookie-parser")
const createArticle = require("./routes/article/createArticle")
const getArticle = require("./routes/article/getArticle")
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
dotenv.config()

const port = process.env.PORT || 4000

app.use("/api/auth",userAuth)
app.use("/api/create",createArticle)
app.use("/api/get/",getArticle)

app.listen(port,() => {console.log(port);})