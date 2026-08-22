const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create post",
      error: error.message,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch posts",
      error: error.message,
    });
  }
};

module.exports = {
  createPost,
  getPosts,
};