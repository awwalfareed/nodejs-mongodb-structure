const mongoose = require("mongoose")

const ordersSchema = mongoose.Schema({
    id:{
         type:Number
    },
    item:{
      type:String
 },
 price:{
  type:Number
},

quantity:{
  type:Number
},

 


})

const orderModel = mongoose.model('order', ordersSchema)

module.exports = orderModel;