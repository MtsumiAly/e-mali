const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const {generateToken} = require("../config/jwtToken");

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if(!findUser) {
        //create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else{
        //user already exists
        throw new Error(`User Already Exists`);
    }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //find the user
    const user = await User.findOne({email});
    if(user && await user.isPasswordMatched(password)) {
        res.json({
            _id: user?._id,
            firstname: user?.firstname,
            lastname: user?.lastname,
            email: user?.lastname,
            mobile: user?.mobile,
            token: generateToken(user?._id),
        });
    } else {
        throw new Error("Invalid credentials");
    }
});

// Get All users
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        throw new Error(error);
    }
});

const getUserById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        res.json(user);
    } catch (error) {
        throw new Error(error);
    }
});

const updateUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(
            id,
            {
             firstname:req?.body?.firstname,
             lastname:req?.body?.lastname,
             email:req?.body?.email,
             mobile:req?.body?.mobile,
            },
            {
                new: true,
            }
    );
        res.json(user);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports= {
    createUser,
    loginUserCtrl,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
};
