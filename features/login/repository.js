const mongoose = require('mongoose');

const InstagramSchema = mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const InstagramModel = mongoose.model('User', InstagramSchema)

const createLogin = async(username, password) =>{
    return await InstagramModel.create({username, password});

}

module.exports = {createLogin}