const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");



const createBlog = asyncHandler(async(req, res) => {
    try{
        const newBlog = await Blog.create(req.body);
        res.json({
            status: "success",
            newBlog,
        })
    }catch(error) {
        throw new Error(error);
    }
});

const updateBlog = asyncHandler(async(req, res) => {
    const { id } = req.params;
    try{
        validateMongoDbId(id);
        const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true, });
        res.json(blog)
    }catch(error) {
        throw new Error(error);
    }
});

const getBlog = asyncHandler(async(req, res) => {
    const { id } = req.params;
    try{
        validateMongoDbId(id);
        const blog = await Blog.findById(id);
        await Blog.findByIdAndUpdate(
            id,
            {
                $inc: { numViews: 1 },
            },
            { new:true }
        );
        res.json(blog);
    }catch(error) {
        throw new Error(error);
    }
});

const getAllBlogs = asyncHandler(async(req, res) => {
    try{
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteBlog = asyncHandler(async(req, res) => {
    const { id } = req.params;
    try{
        // Check if the provided ID is a valid MongoDB ObjectID
        validateMongoDbId(id);
        
        // Find the blog with the specified ID and delete it
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({
                status: "error",
                message: "Blog not found",
            });
        }

        res.json({
            status: "success",
            message: "Blog deleted successfully",
        });

    }catch(error) {
        throw new Error(error);
    }
});


const likeBlog = asyncHandler(async (req, res) => {
    const { id } = req.body;
    const { userId } = req?.user?._id;
    try {
      const blog = await Blog.findById(id);
      if (!blog) {
        throw new Error("Blog not found");
      }
      const isLiked = blog?.isLiked;
      const isDisliked = blog.dislikes.includes(userId);
      if (isLiked) {
        // User already liked the blog, remove like
        await Blog.findByIdAndUpdate(
          id,
          { $pull: { likes: userId }, isLked: false },
          { new: true }
        );
        res.json({ status: "success", message: "Like removed" });
      } else if (isDisliked) {
        // User already disliked the blog, toggle like and dislike
        await Blog.findByIdAndUpdate(
          id,
          { $pull: { dislikes: userId }, $push: { likes: userId }, isLked: true },
          { new: true }
        );
        res.json({ status: "success", message: "Liked the blog" });
      } else {
        // User hasn't liked or disliked the blog, add like
        await Blog.findByIdAndUpdate(
          id,
          { $push: { likes: userId }, isLked: true },
          { new: true }
        );
        res.json({ status: "success", message: "Liked the blog" });
      }
    } catch (error) {
      throw new Error(error);
    }
  });
  

module.exports = { likeBlog };



module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog }