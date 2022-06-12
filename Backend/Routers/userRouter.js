
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

router.get("/", authenticate, getUser)

router.post("/register", registerUser)
router.post("/login", loginUser)

router.route("/:id").put(authenticate, putUser).delete(authenticate, deleteUser);

module.exports = router