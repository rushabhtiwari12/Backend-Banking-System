const mongoose = require("mongoose");

async function connectToDB(){
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database connected Successfully");
})
    .catch(err=>{
        console.log("Error in connecting Database", err);
        process.exit(1);
    })

    
}

module.exports = connectToDB;