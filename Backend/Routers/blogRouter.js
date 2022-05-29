const express = require("express");
const router = express.Router();
const {
  getBlog,
  postBlog,
  putBlog,
  deleteBlog,
} = require("../Controllers/blogController");

router.route("/").get(getBlog).post(postBlog);
router.route("/:id").put(putBlog).delete(deleteBlog);

module.exports = router;
