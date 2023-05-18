import axios from "axios";
import { base_url } from "../../utils/base_url.js";
import { config } from "../../utils/axiosConfig";

const getCoupons = async() => {
    try {
        const response = await axios.get(`${base_url}coupons/all`, config);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const addCoupon = async(data) => {
    try{
        const response = await axios.post(`${base_url}coupons/new`, data, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};


const couponService = {
    getCoupons,
    addCoupon
};

export default couponService;