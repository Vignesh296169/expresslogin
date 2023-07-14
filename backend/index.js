const express=require("express")

const app=express()
const cors=require("cors")
require("dotenv").config()
const dbconnection=require("./db/connection")
const userRoute=require("./route/userRoute")
const port=3000

app.use(express.json())
app.use(cors())
app.use("/api",userRoute)

dbconnection()
app.listen(port,()=>{
  console.log(`server is listening on ${port}`);
})