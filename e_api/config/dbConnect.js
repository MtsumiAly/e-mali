import mongoose from "mongoose";

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log(`Successfully connected`);
    } catch(error) {
        throw new Error(error);
    }
};
module.exports = dbConnect;
