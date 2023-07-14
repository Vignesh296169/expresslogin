const mongoose=require("mongoose")

const user=new mongoose.Schema({
 name:{
  type: String,
  required:true,
 
 },
 password:{
  type: String
 }
})

const User=mongoose.model("User",user)
module.exports=User