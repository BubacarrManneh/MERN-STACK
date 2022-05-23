const asyncHandler = require('express-async-handler')

const getUser = asyncHandler(async(req, res) => {
    res.status(200).json({Message: 'Bubacarr Manneh'})
    throw new Error({Messagae: "There is an error fetching data"})
});
const postUser = asyncHandler(async(req, res) => {
  res.status(200).json({ Message: `The user has been updated` });
  throw new Error({ Messagae: "There is an error creating data" });
});
const putUser = asyncHandler(async(req, res) => {
  res.status(200).json({ Message: `The user ${req.params.id} has been updated` });
   throw new Error({ Messagae: "There is an error updating data" });
});
const deleteUser = asyncHandler(async(req, res) => {
 res.status(200).json({ Message: `The user ${req.params.id} has been deleted` });
  throw new Error({ Messagae: "There is an error deleting data" });
});

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser
};
