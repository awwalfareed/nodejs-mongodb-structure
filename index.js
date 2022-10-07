const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const userRoutes = require('./routes/user.routes');
const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.get("/", (req,res) => {
    res.send("API is running...");
});

app.use("/api/user", userRoutes)
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server is running on localhost:${PORT}`));