require("dotenv").config({
    quiet: true
})

const app = require("./src/app.js");
const connectToDB = require("./src/config/db.js");
const dns = require("dns");
const authMiddleware = require("./src/middleware/auth.middleware.js")

dns.setServers(["1.1.1.1","8.8.8.8"])

connectToDB();

app.listen(3000, ()=>{
    console.log("Server is running on Port 3000")
})
