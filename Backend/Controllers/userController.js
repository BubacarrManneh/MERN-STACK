const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../Models/user');

// @Get user api/user
const getUser = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
  throw new Error({ Messagae: "There is an error fetching data" });
});

// @Post user
const postUser = asyncHandler(async (req, res) => {
    const {firstName, lastName, email, password} = req.body

  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error('Please supply user credentials');
  }
  
  // Check if user exists
  const existedUser = await User.findOne({email})
  if(existedUser){
    res.status(400)
    throw new Error('User already exixt in the database')
  }

// Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, salt);

// @Create User
    const user = await User.create({
      firstName,
      lastName,
      email,
      hashedPassword,
    });
    if (user) {
      res.status(201).json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: hashedPassword
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  res.status(200).json(user);
});

// @Update user
const putUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new Error({ Messagae: "There is an error updating user data" });
  }
  const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateUser);
});

// @Delete user
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new Error({ Messagae: "There is no user data found to delete" });
  }
  await user.remove();
  res.status(200).json({ id: req.params.id });
  throw new Error({ Messagae: "There is an error deleting data" });
});

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
};