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
        const blog = await Blog.findById(id).populate('likes');
        updatedBlog = await Blog.findByIdAndUpdate(
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
    validateMongoDbId(id);
  
    // find the blog
    const blog = await Blog.findById(id);
    
    const loginUserId = req?.user?._id;
//check if user has liked the blog
    const isLiked = blog?.isLiked;

    // find if the user has disliked the blog
    const alreadyDisliked = blog?.dislikes?.find(
        (userId) => userId?.toString() === loginUserId?.toString()
    );

    if (alreadyDisliked) {
        const blog = await Blog.findByIdAndUpdate(
            id,
            { 
                $pull: { dislikes: loginUserId },
                isDisLiked: false,
            },
            {new: true}
            );
        res.status(200).json({
        status: "success",
        message: "Removed dislike from the blog sice it was disliked",
        blog,
      });
    }
    if (isLiked) {
      const blog = await Blog.findByIdAndUpdate(
        id,
        { 
            $pull: { likes: loginUserId },
            isLiked: false,
        },
        {new: true}
        );
      res.status(200).json({
        status: "success",
        message: " Removed Like from the blog",
        blog,
      });
    } else {
        const blog = await Blog.findByIdAndUpdate(
            id,
            { 
                $push: { likes: loginUserId },
                isLiked: true,
            },
            {new: true}
            );
          res.status(200).json({
            status: "success",
            message: " Successfully Liked from the blog",
            blog,
          });
    }
  });
  
  

const dislikeBlog = asyncHandler(async (req, res) => {
    const { id } = req.body;
    validateMongoDbId(id);
  
    // find the blog
    const blog = await Blog.findById(id);
    
    const loginUserId = req?.user?._id;
//check if user has liked the blog
    const isDisLiked = blog?.isDisLiked;

    // find if the user has disliked the blog
    const alreadyliked = blog?.likes?.find(
        (userId) => userId?.toString() === loginUserId?.toString()
    );

    if (alreadyliked) {
        const blog = await Blog.findByIdAndUpdate(
            id,
            { 
                $pull: { likes: loginUserId },
                isLiked: false,
            },
            {new: true}
            );
        res.status(200).json({
        status: "success",
        message: "Removed like from the blog since it was alreadyliked",
        blog,
      });
    }
    if (isDisLiked) {
      const blog = await Blog.findByIdAndUpdate(
        id,
        { 
            $pull: { dislikes: loginUserId },
            isDisLiked: false,
        },
        {new: true}
        );
      res.status(200).json({
        status: "success",
        message: " Removed dislike from the blog because it was disliked again",
        blog,
      });
    } else {
        const blog = await Blog.findByIdAndUpdate(
            id,
            { 
                $push: { dislikes: loginUserId },
                isDisLiked: true,
            },
            {new: true}
            );
          res.status(200).json({
            status: "success",
            message: " Successfully Disliked the blog",
            blog,
          });
    }
  });


module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog }