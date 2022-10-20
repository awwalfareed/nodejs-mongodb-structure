const orderModel = require('../models/order.model')


module.exports = {
    createOrder : async function(req,res){
        try {
            //  const orders = await orderModel.insertMany( [
            //     { "id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
            //     { "id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
            //     { "id" : 3  }
            //  ] )

            const orders = await orderModel.aggregate( [
                {
                  $lookup:
                    {
                      from: "inventories",
                      localField: "item",
                      foreignField: "item",
                      as: "inventory_docs"
                    }
               }
             ] )

             res.send(orders)
        } catch (error) {
            console.log(error);
        }
    }
}