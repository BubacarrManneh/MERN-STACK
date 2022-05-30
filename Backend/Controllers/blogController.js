const asyncHandler = require("express-async-handler");
const Blog = require("../Models/blog");
const User = require("../Models/user")

// @Get blog API api/blog
const getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.find({ user: req.user.id});
  res.status(200).json(blog);
});

// @Create blog API api/blog/:id
const postBlog = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400);
    throw new Error("There is an error requesting data");
  };
  const blog = await Blog.create({ 
    text: req.body.text,
    user: req.user.id
  });
  res.status(200).json(blog);
});

// @Update blog API api/blog/:id
const putBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    throw new Error({ Messagae: "There is an error updating blog data" });
  }

  const user = await User.findById(req.user.id )
  if(!user){
    res.status(401)
    throw new Error("User is not logged in")
  }

  if(blog.user.toString() !== user.id){
    res.status(401)
    throw new Error("Unauthorized User trying to update blog")

  }
  const updatedUser = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

// @Delete blog API api/blog/:id
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    throw new Error({ Messagae: "There is no blog data found to delete" });
  }

  // @Check if user exists
   const user = await User.findById(req.user.id);
   if (!user) {
     res.status(401);
     throw new Error("User is not logged in");
   }

// @Check if User id matches with blog id
   if (blog.user.toString() !== user.id) {
     res.status(401);
     throw new Error("Unauthorized User trying to delete blog");
   }

  await blog.remove();
  res.status(200).json({ id: req.params.id });
  throw new Error({ Messagae: "There is an error deleting data" });
});

module.exports = {
  getBlog,
  postBlog,
  putBlog,
  deleteBlog,
};
