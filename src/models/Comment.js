const mongoose = require("../config/db")

const commentSchema = new mongoose.Schema({
    content: String,
    author: {
        tyoe: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment