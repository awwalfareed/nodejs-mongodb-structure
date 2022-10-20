const inventoryModel = require('../models/inventory.model')


module.exports = {
    createInventory : async function(req,res){
        try {
             const inventory = await inventoryModel.insertMany( [
                { "id" : 1, "item" : "almonds", "description": "product 1", "instock" : 120 },
                { "id" : 2, "item" : "bread", "description": "product 2", "instock" : 80 },
                { "id" : 3, "item" : "cashews", "description": "product 3", "instock" : 60 },
                { "id" : 4, "item" : "pecans", "description": "product 4", "instock" : 70 },
                { "id" : 5, "item": null, "description": "Incomplete" },
                { "id" : 6 }
             ] )

             res.send(inventory)

        } catch (error) {
            console.log(error);
        }
    }
}