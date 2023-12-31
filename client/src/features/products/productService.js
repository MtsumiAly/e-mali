import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async() => {
    const response = await axios.get(`${base_url}products/all`);
    if(response.data){
        return response.data;
    }
};


const addToWishList = async(prodId) => {
    const response = await axios.put(`${base_url}products/wishlist`, { prodId }, config);
    if (response.data) {
        return response.data;
    }
}

export const productService = { getProducts, addToWishList };