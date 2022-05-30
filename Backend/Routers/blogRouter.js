const express = require("express");
const router = express.Router();
const {
  getBlog,
  postBlog,
  putBlog,
  deleteBlog,
} = require("../Controllers/blogController");
const { authenticate } = require("../Middlewares/authMiddleware");

router.route("/").get(authenticate, getBlog).post(authenticate, postBlog);
router.route("/:id").put(authenticate, putBlog).delete(authenticate, deleteBlog);

module.exports = router;
