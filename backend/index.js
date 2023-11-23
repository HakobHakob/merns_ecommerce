const express = require("express")
const cors = require("cors")

const products = require("./products")

//Invoce the express app
const app = express()

app.use(express.json())
app.use(cors())

//req => froqm frontend, res => from backend api
app.get("/", (req,res)=>{
    res.send("Welcome to our online shop API...")
})
app.get("/products", (req,res)=>{
    res.send(products)
})

//Configure our port
const port = process.env.PORT || 5000
app.listen(`${port}`, console.log(`Server running on port ${port}`))