const mongoose = require("mongoose")

const inventorySchema = mongoose.Schema({
    id: {
        type: Number
    },
    item: {
        type: String
    },
    description: {
        type: String
    },

    instock: {
        type: Number
    },

})

const inventoryModel = mongoose.model('inventory', inventorySchema)

module.exports = inventoryModel;