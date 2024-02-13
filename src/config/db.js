const mongoose = require("mmongoose")
const mongoDB = "mongodb://127.0.0.1:27017/blogDB"
mongoose.connect(mongoDB, {
    useNewUrlParser: true, useUnifiedTopology: true
})
const db = mongoose.connection
db.on("error", console.error.bind(console, "Database connection failed, here is why:"))
module.exports = mongoose;