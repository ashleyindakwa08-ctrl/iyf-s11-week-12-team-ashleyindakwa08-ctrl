const express = require("express");

const {
  addComment,
  getComments,
} = require("../controllers/commentController");

const router = express.Router();

// Add a comment to a post
router.post("/:postId", addComment);

// Get comments for a post
router.get("/:postId", getComments);

module.exports = router;