const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const {generateToken} = require("../config/jwtToken");
const validateMongoDbId = require("../utils/validatMongodbId");
const {generateRefreshToken} = require("../config/refreshToken");

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
        const refreshToken = await generateRefreshToken(user?._id);
        const updateUser = await User.findByIdAndUpdate(user.id, {
            refreshToken: refreshToken,
        }, {new:true}
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72*60*60*1000,
        });
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
        validateMongoDbId(id);
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        validateMongoDbId(id);
        const user = await User.findByIdAndDelete(id);
        res.json(user);
    } catch (error) {
        throw new Error(error);
    }
});

const updateUser = asyncHandler(async (req, res) => {
    try {
        const { _id } = req.user;
        validateMongoDbId(_id);
        const user = await User.findByIdAndUpdate(
            _id,
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

const blockUser = asyncHandler(async (req, res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const block = await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true,
            },
            {
                new: true,
            }
        );
        res.json({
            message: "user blocked"
        });
    } catch (error) {
        throw Error(error);
    }
});

const unblockUser = asyncHandler(async (req, res) => {
   const { id } = req.params;
   validateMongoDbId(id);
   try {
       const unblock = await User.findByIdAndUpdate(
           id,
           {
               isBlocked: false,
           },
           {
               new: true,
           }
       )
       res.json({
           message: "user Un-blocked"
       })
   } catch (error) {
    throw Error(error);
}
});

module.exports= {
    createUser,
    loginUserCtrl,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
    blockUser,
    unblockUser
};
