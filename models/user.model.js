const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    FirstName:{
        type: String
    },
    LastName:{
        type: String
    },
    id:{
        type:Number
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;