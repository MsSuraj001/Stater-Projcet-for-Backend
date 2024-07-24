const mongoose = require('mongoose');
const serverConfig = require('./serverConfig')


// the below function helps us to connect to a mongoodb server
async function connectDB(){
    try{
        await mongoose.connect(serverConfig.DB_URL);
        console.log("Succsefully connect to the mongoos db server .......");
    }catch(error){
        console.log("Not able to connect to the mongoodb server");
        console.log(error);
    }
}

module.exports = connectDB;