const inventoryModel = require('../models/inventory.model')
/**/

module.exports = {
    createInventory : async function(req,res){
        try {
             const inventory = await inventoryModel.insertMany([
                { "id" : 1, "item" : "almonds", "description": "product 1", "instock" : 120 },
                { "id" : 2, "item" : "bread", "description": "product 2", "instock" : 80 },
                { "id" : 3, "item" : "cashews", "description": "product 3", "instock" : 60 },
                { "id" : 4, "item" : "pecans", "description": "product 4", "instock" : 70 },
                { "id" : 5, "item": null, "description": "Incomplete" },
                { "id" : 6 }
            ])

             res.send(inventory)

        } catch (error) {
            console.log(error);
        }
    },

    find : async function(req,res){
        try {
             const inventory = await inventoryModel.find({item: req.body.item})

             res.send(inventory)

        } catch (error) {
            console.log(error);
        }
    },


    findAll : async function(req,res){
        try {
             const inventory = await inventoryModel.find({})

             res.send(inventory)

        } catch (error) {
            console.log(error);
        }
    },
    
    
    findEquals : async function(req,res){
        try {
             const inventory = await inventoryModel.find({item: req.body.item})

             res.send(inventory)

        } catch (error) {
            console.log(error);
        }
    },
    
    
    findNotEquals : async function(req,res){
        try {
             const inventory = await inventoryModel.find({item: {$ne: req.body.item}})

             res.send(inventory)

        } catch (error) {
            console.log(error);
        }
    },


    findGt : async function(req,res){
        try {
             const inventory = await inventoryModel.find({instock: {$gt: req.body.instock}})

             res.send(inventory)

        } catch (error) {
            console.log(error);
        }
    },
    
    
    findGte : async function(req,res){
        try {
             const inventory = await inventoryModel.find({instock: {$gte: req.body.instock}})

             res.send(inventory)

        } catch (error) {
            console.log(error);
        }
    },


    findLt : async function(req,res){
        try {
             const inventory = await inventoryModel.find({instock: {$lt: req.body.instock}})

             res.send(inventory)

        } catch (error) {
            console.log(error);
        }
    },


    findLte : async function(req,res){
        try {
             const inventory = await inventoryModel.find({instock: {$lte: req.body.instock}})

             res.send(inventory)

        } catch (error) {
            console.log(error);
        }
    },


    countAll : async function(req,res){
        try {
             const inventory = await inventoryModel.countDocuments()

             res.json(inventory)

        } catch (error) {
            console.log(error);
        }
    },


    deleteAll : async function(req,res){
        try {
             const inventory = await inventoryModel.deleteMany()

             res.send(inventory)

        } catch (error) {
            console.log(error);
        }
    },
}