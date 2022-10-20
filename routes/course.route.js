const express = require('express');
const courseController = require('../controllers/course.controller');

const router = express.Router();

// router.get("/agggregate",individulaController.aggresult)
// router.post("/course",courseController.createCourse)
router.post("/course",courseController.updateCourse)
// router.post("/course",courseController.readCourse)
// router.post("/course",courseController.deleteCourse)








module.exports = router;