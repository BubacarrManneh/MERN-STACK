const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../Models/user');

// @Get user API api/user/get
const getUser = asyncHandler(async (req, res) => {
  const {_id, firstName, lastName, email} = await User.findById(req.user.id)
  res.status(200).json({
    id: _id,
    firstName,
    lastName,
    email,
  });
  throw new Error({ Messagae: "There is an error fetching data" });
});

  // @Login user API api/user/login
  const loginUser = asyncHandler(async(req, res) => {
    const {email, password} =req.body

    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
      res.json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        token: getSecretToken(user._id),
      });
    }else{
      res.status(400)
      throw new Error('Unauthorised user login')
    }
    res.status(201).json(user)
  })

// @Register new user API api/user/register
const registerUser = asyncHandler(async (req, res) => {
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
    const hashedPassword = await bcrypt.hash(password, salt);

// @Create ne user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.status(201).json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        token: getSecretToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  res.status(200).json(user);
});

// Create JWT
const getSecretToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}
// @Update user API api/user/:id
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

// @Delete user API api/user/:id
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
  registerUser,
  loginUser,
  putUser,
  deleteUser,
};