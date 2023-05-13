const express = require('express');
const inventoryController= require('../controllers/inventory.controller');
const userController= require('../controllers/inventory.controller');

const router = express.Router();


router.post("/createInventory", inventoryController.createInventory)
// router.get("/insertdoc",userController.InsertingArray)
// router.get("/bulkwrite",userController.bulkwrite)
// router.get("/updateOne",userController.updateOne)
// router.get("/findOneAndDelete",userController.findOneAndDelete)
// router.get("/findOneAndRepace",userController.findOneAndRepace)
// router.get("/findOneAndUpdate",userController.findOneAndUpdate)
// router.get("/projection",userController.findOneAndUpdateProjection)
// router.get("/findOneAndUpdateSort",userController.findOneAndUpdateSort)
// router.get("/findOneAndupadteUpsert",userController.findOneAndupadteUpsert)
router.get("/find",userController.find)
router.get("/findAll",userController.findAll)
// router.get("/findInc",userController.findInc)
// router.get("/findExc",userController.findExc)
router.get("/findEquals",userController.findEquals)
router.get("/findNotEquals",userController.findNotEquals)
router.get("/findGt",userController.findGt)
router.get("/findGte",userController.findGte)
router.get("/findLt",userController.findLt)
router.get("/findLte",userController.findLte)
// router.get("/findMatch",userController.findMatch)
// router.get("/findNmatch",userController.findNmatch)
// router.get("/findSort",userController.findSort)
// router.get("/findLimitSort",userController.findLimitSort)
// router.get("/UpdateSet",userController.UpdateSet)
// router.get("/Updateupsert",userController.Updateupsert)
// router.get("/updateIncrement",userController.updateIncrement)
// router.get("/updateUnset",userController.updateUnset)
// router.get("/updateRename",userController.updateRename)
// router.get("/UpdateManyUpsert",userController.UpdateManyUpsert)
// router.get("/Deleteone",userController.Deleteone)
// router.get("/Deletemany",userController.Deletemany)
// router.get("/replaceOne",userController.replaceOne)
router.get("/countAll",userController.countAll)
router.delete("/deleteAll",userController.deleteAll)

module.exports = router; 