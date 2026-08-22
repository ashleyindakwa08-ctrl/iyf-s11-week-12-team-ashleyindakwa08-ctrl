const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const {
  createPost,
  getPosts,
} = require("../controllers/postController");

router.post("/", createPost);
=======
const { getPosts } = require("../controllers/postController");

>>>>>>> 8d4287a58c72e8d8291192594d730392e2723262
router.get("/", getPosts);

module.exports = router;