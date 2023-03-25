const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const {generateToken} = require("../config/jwtToken");
const validateMongoDbId = require("../utils/validateMongodbId");
const {generateRefreshToken} = require("../config/refreshToken");
const sendEmail = require("../controller/emailCtrl")
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

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

//Handle refresh token
const handleRefreshToken = asyncHandler(async(req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No refresh token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error("No Refresh token present in db or No user matched with the provided token ")
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error("Something wrong with refresh Token");
        }else {
            const accessToken = generateToken(user?._id);
            res.json({ accessToken });
        }
    });
});

// Logout
const logOut = asyncHandler(async(req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No refresh token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        throw new Error("No User logged in");
    }else{
        await User.findOneAndUpdate(refreshToken, {
            refreshToken: "",
        });
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
        });
        return res.sendStatus(204); //forbidden
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

const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateMongoDbId(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    }else {
        res.json(user);
    }
});

const forgotPasswordToken = asyncHandler(async(req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error("USer not found with this email");
    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetUrl = `Hi, Please follow this link to reset your password. This link is valid for 10 minutes. +
            <a href='http://localhost:5000/api/users/forgot-password-token/${token}'>Click here</a>`;
        const data = {
            to:email,
            text: "Hey User",
            subject: "Forgot Password Link",
            htm: resetUrl,
        }
        sendEmail(data);
        res.json(token)
    }catch (error) {
        throw new Error(error);
    }
});

const resetPassword = asyncHandler(async(req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error("Token Expired, please try again later");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
});

module.exports= {
    createUser,
    loginUserCtrl,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logOut,
    updatePassword,
    forgotPasswordToken,
    resetPassword
};
