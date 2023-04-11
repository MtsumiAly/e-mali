const User = require("../models/userModel");
const Order = require("../models/orderModel");

const updateOrders = async () => {
  try {
    // Find all orders that have an `orderedBy` field of type ObjectId
    const orders = await Order.find({ orderedBy: { $type: 'objectId' } });

    // Loop through the orders and populate the `orderedBy` field with user details
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      const user = await User.findById(order.orderedBy);
      order.orderedBy = user;
      await order.save();
    }

    console.log(`Updated ${orders.length} orders successfully.`);
  } catch (error) {
    console.error(`Error updating orders: ${error.message}`);
  }
};

updateOrders();
