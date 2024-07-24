const express = require("express");
const app = express();
const serverConfig = require('./config/serverConfig.js');
const connectDB = require("./config/dbConfig.js");

// const PORT = process.env.PORT

app.listen(serverConfig.PORT, async ()=>{
    await connectDB();
    console.log(`Server start from the ${serverConfig.PORT} port....!!`);
})