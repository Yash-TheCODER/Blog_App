const Post = require('../models/postModel');

exports.createPost = async(req,res) => {
    try{
        const {title,body} = req.body;
        const post = new Post({
            title,body
        });
        const savedPost = await post.save();

        res.json({
            post:savedPost
        });
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:'Server error',
            error:'Error While creating post'
        });
    }
}

exports.getAllPosts = async(req,res) => {
    try{
        // const allPost = await Post.get({});
        // res.status(200).json({
        //     success:true,
        //     data:allPost,
        // })
        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts
        })
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:'Server error',
            error:'Error While fetching post'
        });
    } 
}