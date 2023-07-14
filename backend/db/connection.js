const mongoose=require("mongoose")
const dbconnection=async()=>{
  try {
      await mongoose.connect(process.env.Db_Url)
      console.log("databse is connected");
  } catch (error) {
      console.log(error)
  }
}
module.exports=dbconnection