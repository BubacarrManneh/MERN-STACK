
const express = require('express');
const router = express.Router();

const {
 getUser,
 putUser,
 deleteUser,
 registerUser,
 loginUser,
} = require("../Controllers/userController");
const { authenticate } = require('../Middlewares/authMiddleware');

router.get("/get", authenticate, getUser)

router.post("/login", loginUser)
router.post("/register", registerUser)

router.route("/:id").put(putUser).delete(deleteUser);

module.exports = router