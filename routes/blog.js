const express = require('express');
const router = express.Router();
// Route Handler
const {createPost,getAllPosts} = require('../controller/postController');
const {createComment} = require('../controller/commentController');
const {likePost,unlikePost} = require('../controller/likeController');

// Routes define
router.post('/posts/create',createPost);
router.get('/posts/getAllPosts',getAllPosts);
router.post('/comments/create',createComment);
router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost);

module.exports = router;

