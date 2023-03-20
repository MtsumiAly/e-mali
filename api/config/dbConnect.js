const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Successfully connected`);
    } catch(error) {
        throw new Error(error);
    }
};
module.exports = dbConnect;
