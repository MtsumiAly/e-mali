const User = require("../models/userModel");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const Coupon = require("../models/couponModel");
const asyncHandler = require("express-async-handler");
const {generateToken} = require("../config/jwtToken");
const validateMongoDbId = require("../utils/validateMongodbId");
const {generateRefreshToken} = require("../config/refreshToken");
const sendEmail = require("../controller/emailCtrl");
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

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //find the user
    const admin = await User.findOne({email});
    if(admin.role !== 'admin') throw new Error("Not Authorized, you are not an Admin");
    if(admin && await admin.isPasswordMatched(password)) {
        const refreshToken = await generateRefreshToken(admin?._id);
        const updateUser = await User.findByIdAndUpdate(admin.id, {
            refreshToken: refreshToken,
        }, {new:true}
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72*60*60*1000,
        });
        res.json({
            _id: admin?._id,
            firstname: admin?.firstname,
            lastname: admin?.lastname,
            email: admin?.lastname,
            mobile: admin?.mobile,
            token: generateToken(admin?._id),
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

// Save Address
const saveAddress = asyncHandler(async (req, res) => {
    try {
        const { _id } = req.user;
        validateMongoDbId(_id);
        const user = await User.findByIdAndUpdate(
            _id,
            {
             address:req?.body?.address,
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

//User wishlist
const getWishList = asyncHandler(async(req, res) => {
    const { _id } = req.user;
    try {
        const user = await User.findById(_id).populate("wishlist");
        res.json(user);
    }catch(error) {
        throw new Error(error);
    }
});

const userCart = asyncHandler(async(req, res) => {
    const { cart } = req.body;
    console.log(cart);
    const { _id } = req.user;
    validateMongoDbId(_id);
    try{
        let products = [];
        const user = await User.findById(_id);
        //Checking if user already has products in cart
        const alreadyExistCart = await Cart.findOne({ orderedBy: user._id });
        if (alreadyExistCart) {
            alreadyExistCart.remove();
        }
        for (let i = 0; i < cart.length; i++) {
            let object = {};
            object.product = cart[i]._id;
            object.count = cart[i].count;
            object.color = cart[i].color;
            let getPrice = await Product.findById(cart[i]._id).select("price").exec();
            object.price = getPrice.price;
            products.push(object);
            console.log(products)
        }
        let cartTotal = 0;
        for (let i = 0; i < products.length; i++) {
            cartTotal = cartTotal + products[i].price * products[i].count
        }
        let newCart = await new Cart({
            products,
            cartTotal,
            orderedBy: user?._id,
        }).save()
        res.json(newCart);
    }catch (error) {
        throw new Error(error);
    }
});


const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    console.log(_id);
    try {
        const cart = await Cart.findOne({ orderedBy: _id })
            .populate("products.product", "_id title price totalAfterDiscount");
        console.log(cart);
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});

const emptyCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    console.log(_id);
    try {
        const user = await User.findOne(_id);
        const cart = await Cart.findOneAndRemove({ orderedBy: user._id });
        if (!cart){
           res.json({message: "Cart is empty!"}) 
        }
        res.status(200).json({
            message: "Successfully emptied cart",
            cart
        });
    } catch (error) {
        throw new Error(error);
    }
});

const applyCoupon = asyncHandler(async (req, res) => {
    const { coupon } = req.body;
    const { _id } = req.user;

    // validate the user ID
    validateMongoDbId(_id);

    // check if the coupon code exists in the database
    const validCoupon = await Coupon.findOne({ name: coupon });
    if (validCoupon === null) {
        throw new Error("Invalid coupon");
    }

    // find the user's cart and get the list of products and total cost
    const user = await User.findOne({ _id });
    let { cartTotal } = await Cart.findOne({
        orderedBy: user._id,
    }).populate("products.product");

    // calculate the discount and update the total cost
    let totalAfterDiscount = (
        cartTotal -
        (cartTotal * validCoupon.discount) / 100
    ).toFixed(2);

    // update the cart with the new total cost
    await Cart.findOneAndUpdate(
        { orderedBy: user._id },
        { totalAfterDiscount },
        { new: true }
    );

    // return the updated total cost to the client
    res.json(totalAfterDiscount)
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
    resetPassword,
    loginAdmin,
    getWishList,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon
};