const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const inventoryRoutes = require('./routes/inventory.routes');
const orderRoutes = require('./routes/order.route')
const courseRoutes = require('./routes/course.route')
const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.get("/", (req,res) => {
    res.send("API is running..."); 
});

app.use("/api/user", inventoryRoutes)
app.use("/api/data", orderRoutes)
app.use("/api/details", courseRoutes)
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server is running on localhost:${PORT}`));