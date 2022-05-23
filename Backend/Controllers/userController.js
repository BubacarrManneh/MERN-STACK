const asyncHandler = require('express-async-handler')
const User = require('../Models/user')

const getUser = asyncHandler(async(req, res) => {
    const user = await User.find()

    res.status(200).json(user)
    throw new Error({Messagae: "There is an error fetching data"})
});
const postUser = asyncHandler(async(req, res) => {
  if(!req.body){
    res.status(400)
     throw new Error({ Messagae: "There is an error requesting data" });
  }
  const user = await User.create({
      fisrtName,
      lastName,
      email,
  } = req.body)
  res.status(200).json(user);
});
const putUser = asyncHandler(async(req, res) => {
  const user = await User.findById(req.params.id)

  if(!user){
    throw new Error({ Messagae: "There is an error updating user data" });
  }
  const updateUser = await User.findByIdAndRemove(req.params.id, req.body, {new: true})
  res.status(200).json(updateUser);
   
});
const deleteUser = asyncHandler(async(req, res) => {
  const user = await User.findById(req.params.id);
  if(!user){
     throw new Error({ Messagae: "There is no user data found to delete" });
  }
  await user.remove()
  res.status(200).json({id: req.params.id});
  throw new Error({ Messagae: "There is an error deleting data" });
});

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser
};
