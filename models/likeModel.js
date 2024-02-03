const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    comment: { // changed here for nested comments like
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    },
    user:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("Like",likeSchema);