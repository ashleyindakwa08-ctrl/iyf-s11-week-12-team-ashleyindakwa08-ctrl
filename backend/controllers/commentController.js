const Comment = require("../models/Comment");
const Post = require("../models/Post");

// Add a comment
const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { authorName, content } = req.body;

    if (!authorName || !content) {
      return res.status(400).json({
        message: "Author name and comment are required",
      });
    }

    // Check that the post exists
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    const comment = await Comment.create({
      post: postId,
      authorName,
      content,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({
      message: "Failed to add comment",
      error: error.message,
    });
  }
};

// Get comments for a post
const getComments = async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({
      post: postId,
    }).sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get comments",
      error: error.message,
    });
  }
};

module.exports = {
  addComment,
  getComments,
};