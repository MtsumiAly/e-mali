const User = require("../models/userModel");
const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const uniqid = require("uniqid");


const createOrder = asyncHandler(async (req, res) => {
    // Get the request data
    const { COD, couponApplied } = req.body;
    const { _id } = req.user;
    validateMongoDbId(_id);

    try {
        // Check if the order is cash on delivery
        if (!COD) throw new Error("Create cash order failed");

        // Get the user and their cart
        const user = await User.findById(_id);
        let userCart = await Cart.findOne({ orderedBy: user._id });

        // Calculate the final amount based on coupon and cart total
        let finalAmount = 0;
        if (couponApplied && userCart.totalAfterDiscount) {
            finalAmount = userCart.totalAfterDiscount;
        } else {
            finalAmount = userCart.cartTotal;
        }

        // Create a new order with the user's cart, payment details, and order status
        let newOrder = await new Order({
            products: userCart.products,
            paymentIntent: {
                id: uniqid(),
                method: "COD",
                amount: finalAmount,
                status: "Pay on Delivery",
                created: Date.now(),
                currency: "KSh",
            },
            orderedBy: user._id,
            orderStatus: "Pay on Delivery",
        }).save();

        // Update the product quantity and sold status
        let update = userCart.products.map((item) => {
            return {
                updateOne: {
                    filter: { _id: item.product._id },
                    update: { $inc: { quantity: -item.count, sold: +item.count } },
                },
            };
        });
        const updated = await Product.bulkWrite(update, {});

        // Send the response
        res.json({ message: "success" })
    } catch (error) {
        // If an error occurs, throw it and let the error handling middleware handle it
        throw new Error(error);
    }
});

const getOrders = asyncHandler(async(req, res) => {
    const { _id } = req.user;
    validateMongoDbId(_id);
    try {
        const userOrders = await Order.findOne({ orderedBy: _id })
            .populate("products.product")
            .exec();
        res.json(userOrders);
    } catch(error) {
        throw new Error(error);
    }
});

// const getOrdersAdmin = asyncHandler(async(req, res) => {
//     try {
//         const allOrders = await Order.find()
//             .populate("orderedBy")
//             .populate("products.product", "_id title price")
//             .sort("-createdAt")
//             .exec();
//         res.json(allOrders);
//     } catch(error) {
//         throw new Error(error);
//     }
// });
const getOrdersAdmin = asyncHandler(async (req, res) => {
    try {
      const allOrders = await Order.find()
        .populate('orderedBy')
        .populate('products.product')
        .sort('-createdAt')
        .exec();
      res.json(allOrders);
    } catch (error) {
      throw new Error(error);
    }
  });
  




const updateOrderStatus = asyncHandler(async(req, res) => {
    const { status } = req.body;
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const orderStatus = await Order.findByIdAndUpdate(
            id,
            {
                orderStatus: status,
                paymentIntent: {
                    status: status,
                },
            },
            {new: true}
        );
        res.json(orderStatus);
    }catch(error) {
        throw new Error(error);
    }
});

module.exports = {createOrder, getOrders, updateOrderStatus, getOrdersAdmin};