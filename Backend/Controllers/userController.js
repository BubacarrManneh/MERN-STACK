
const getUser = (req, res) => {
    res.status(200).json({Message: 'Bubacarr Manneh'})
}
const postUser = (req, res) => {
  res.status(200).json({ Message: `The user has been updated` });
};
const putUser = (req, res) => {
  res.status(200).json({ Message: `The user ${req.params.id} has been updated` });
};
const deleteUser = (req, res) => {
 res.status(200).json({ Message: `The user ${req.params.id} has been deleted` });
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser
};
