const mongoose = require('mongoose');
const connectDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewURlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongoDB connected");
    } catch(error) {
        console.log(`ERROR:${error.message}`)
        process.exit
    }
}

module.exports = connectDB;