const Post = require("../models/Post");

// Create a post
const createPost = async (req, res) => {
  try {
    const { title, content, authorName } = req.body;

    if (!title || !content || !authorName) {
      return res.status(400).json({
        message: "Title, content and author name are required",
      });
    }

    const post = await Post.create({
      title,
      content,
      authorName,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create post",
      error: error.message,
    });
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get posts",
      error: error.message,
    });
  }
};

module.exports = {
  createPost,
  getPosts,
};