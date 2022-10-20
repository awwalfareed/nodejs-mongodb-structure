const mongoose = require("mongoose")

const courseSchema = mongoose.Schema({
  name: String,
  CID:Number,
  startDate:Date,
  // `lastActiveAt` is a date
  endDate: Date,
  description:String

 


})

const courseModel = mongoose.model('course', courseSchema)

module.exports = courseModel;