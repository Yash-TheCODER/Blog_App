
const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

exports.createComment = async(req,res) => {
    try{
        const{post,user,body,parentCommentId} = req.body;
        const comment = new Comment({
            post,user,body
        });

        const savedComment = await comment.save();
        let updatedDocument;

        if (parentCommentId) {
            updatedDocument = await Comment.findByIdAndUpdate(parentCommentId, { $push: { comments: savedComment._id } }, { new: true }).populate("comments");
         
        } 
        else 
        {
            updatedDocument = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true }).populate({
                path: 'comments',
                populate: { path: 'comments' }
            });
        }

        res.json({
            success: true,
            message: "Comment created successfully",
            data: savedComment,updatedDocument 
        });
        // let updatedPost;
        // if (parentCommentId) 
        // {
        //     await Comment.findByIdAndUpdate(parentCommentId, { $push: { comments: savedComment._id } }, { new: true }).populate("comments").exec();
        // } 
        // else 
        // {
        //     await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true }).populate("comments").exec();
        // }

        // const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments:savedComment._id}},{new:true})
        // .populate("comments")
        // .exec();
        // res.json({
        //     success: true,
        //     message: "Comment created successfully",
        //     data: savedComment
        // });
        // // res.json({
        //     post:updatedPost,
        // })

    }
    catch(err){
        return res.status(400).json(
            {
                error: "Error While Creating Comment",
            }
        );
    }
}