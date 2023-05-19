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

const getCouponById = async(id) => {
    try{
        const response = await axios.get(`${base_url}coupons/${id}`, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const updateCoupon = async(data) => {
    try{
        const response = await axios
        .put(
        `${base_url}coupons/${data.id}`,
        { 
        name: data.couponData.name,
        expiry: data.couponData.expiry,
        discount: data.couponData.discount  
    }, 
        config
    );
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const deleteCoupon = async(id) => {
    try{
        const response = await axios.delete(`${base_url}coupons/${id}`, config);
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const couponService = {
    getCoupons,
    addCoupon,
    updateCoupon,
    getCouponById,
    deleteCoupon,
    
};

export default couponService;