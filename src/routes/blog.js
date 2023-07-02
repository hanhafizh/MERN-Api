const express = require("express");

const router = express.Router();

const blogController = require("../controllers/blog");

// [POST] : http://localhost:4000/v1/blog/post
router.post("/post", blogController.createBlogPost);

module.exports = router;
