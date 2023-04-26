import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const getProducts = async() => {
    const response = await axios.get(`${base_url}products/all`);
    return response.data;
};

const addProduct = async(data) => {
    try{
        const response = await axios.post(`${base_url}products/new`, data, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const productService = {
    getProducts,
    addProduct,
};

export default productService;