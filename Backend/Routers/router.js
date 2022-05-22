
const express = require('express');
const router = express.Router();
const {
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../Controllers/userController");

router.route("/").get(getUser).post(postUser);
router.route("/:id").put(putUser).delete(deleteUser);

module.exports = router