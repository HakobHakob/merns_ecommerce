const express = require("express")
const cors = require("cors")

// for connect to our mongodb
const mongoose = require("mongoose")
const register = require("./routes/register")
const login = require("./routes/login")

const products = require("./products")

//Invoce the express app
const app = express()

// env configuration
require("dotenv").config()

app.use(express.json())
app.use(cors())

//use the user register data in frontend
app.use("/api/register", register)
app.use("/api/login", login)

app.get("/", (req, res) => {
  res.send("Welcome to our online shop API...")
})
app.get("/products", (req, res) => {
  res.send(products)
})

//Configure our port
const port = process.env.PORT || 5000
const uri = process.env.DB_URI

app.listen(`${port}`, console.log(`Server running on port ${port}`))

//connectiong to our mongo db
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connection successful..."))
  .catch((err) => console.log("MongoDB connection failed...", err.message))
