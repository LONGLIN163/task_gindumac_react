const express = require('express')
var cors = require('cors')
const app = express()
const port = 8000
const fs= require("fs")
const url= require("url")

app.use(cors())

app.get("/",(req,res) => {
  fs.readFile("./data/response_example.json",(err,data) => {
      //console.log(data.toString())
      res.json({"results": JSON.parse(data.toString()).data.products})
  })
})

app.get("/",(req,res) => {
  fs.readFile("./data/response_example.json",(err,data) => {
      //console.log(data.toString())
      res.json({"results": JSON.parse(data.toString()).data.products})
  })
})

app.get("/getProductById/:id",(req,res) => {
  let id=req.params.id;
  //+console.log("productId---",id)

  fs.readFile("./data/response_example.json",(err,data) => {
    let arr=JSON.parse(data.toString()).data.products;
    //console.log(arr)
    arr = arr.filter((item) => {
      return item.id === id
    })
  
    res.json({"results": arr[0]})
})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})