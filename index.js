const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 5000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todo");
//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})
//connect to the databse
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req , res) =>{
    res.send(`<h1>THis is HOMEPAGE baby</h1>`);
})