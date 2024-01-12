const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const userAuth = require("./routes/user/user")
const cookieParser = require("cookie-parser")
const createArticle = require("./routes/article/createArticle")
const getArticle = require("./routes/article/getArticle")
const getUserData = require("./routes/user/getUserData")
const deleteArticle = require("./routes/article/deleteArticle")
const saveArticle = require("./routes/article/saveArticle")
const removeArticle = require("./routes/article/removeSavedArticle")
const getSavedArticle = require("./routes/article/getSavedArticle")

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
dotenv.config()

const port = process.env.PORT || 4000

app.use("/api/auth",userAuth)
app.use("/api/create",createArticle)
app.use("/api/get/",getArticle)
app.use("/api/delete/",deleteArticle)
app.use("/api/data/",getUserData)
app.use("/api/save/",saveArticle)
app.use("/api/remove/",removeArticle)
app.use("/api/saved/",getSavedArticle)

app.listen(port,() => {console.log(port);})