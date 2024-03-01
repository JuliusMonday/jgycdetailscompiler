const mongoose = require("mongoose")

async function dbConnection(){
    try{
        const connection = await mongoose.connect(process.env.DATABASE_URI)
        console.log("db connected successfully")
    }catch(error){
        console.log("db connection failed" + error)
    }
}
module.exports = dbConnection;