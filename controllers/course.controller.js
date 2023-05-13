const courseModel = require('../models/course.model')


module.exports = {
    createCourse : async function(req,res){
        try {
            console.log("inside course model");

            const course = await courseModel.create({
                name: req.body.name,
                CID: req.body.CID,
                startDate:req.body.startDate,
                endDate: req.body.endDate,
                description:req.body.description
            })

            // course.lastActiveAt instanceof Date;

            res.send(course)
        } catch (error) {
            res.send(error);
            console.log(error);
        }
    },

    updateCourse:async function(req,res){
        try {
            console.log("inside course model");

            const course =await courseModel.findOneAndUpdate({ name: req.body.name },
            { $set: { description: req.body.description } })

            res.send(course)
        } catch (error) {
            console.log(error);
        }
    },

    readCourse:async function(req,res){
        try {
            console.log("inside course model");

            const course =await courseModel.find({CID: req.body.CID})

            res.send(course)
        } catch (error) {
            console.log(error);
        }
    },

    deleteCourse:async function(req,res){
        try {
            console.log("inside course model");

            const course =await courseModel.deleteOne({CID:req.body.CID})

            res.send(course)
        } catch (error) {
            console.log(error);
        }
    }
}