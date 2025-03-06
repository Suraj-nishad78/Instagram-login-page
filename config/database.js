const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_LINK;

const connectToDb = () =>{
    try{
        mongoose.connect(MONGODB_URL)
        console.log("Database connected successfully.");
    } catch(error){
        console.log("Error while connecting Database.");
    }
}

module.exports ={connectToDb}