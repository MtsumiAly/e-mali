import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";


const getProductCategory = async() => {
    try {
        const response = await axios.get(`${base_url}categories/all`, config);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const addCategory = async(data) => {
    try{
        const response = await axios.post(`${base_url}categories/new`, data, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};


const pcategoryService = {
    getProductCategory,
    addCategory
};

export default pcategoryService;