const mongoose = require("../config/db")

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Comment"
    }],
    likes: {
        type: Number,
        default: 0
    },
})

const Post = mongoose.model("Psot", postSchema)

module.exports = Post