const express = require('express');
const courseController = require('../controllers/course.controller');

const router = express.Router();

// router.get("/agggregate",individulaController.aggresult)
router.post("/createCourse",courseController.createCourse)
router.patch("/updateCourse",courseController.updateCourse)
router.get("/readCourse",courseController.readCourse)
router.delete("/deleteCourse",courseController.deleteCourse)








module.exports = router;