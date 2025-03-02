const mongoose = require("mongoose");

//it will import .env file in database.js file
// This allows you to store sensitive information like API keys, 
// database credentials, and configuration settings outside your code.
require("dotenv").config

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology : true,
})
.then( () => {console.log("DB Connection is Successful") })
.catch((error) =>{
    console.log("Issue in DB Connection");
    console.error(error.message);
    // Unsuccessful exit (error occured)
    process.exit(1);
});
}

module.exports = dbConnect;