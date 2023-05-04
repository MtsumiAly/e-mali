import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";


const getBlogCategory = async() => {
    try {
        const response = await axios.get(`${base_url}blogcategories/all`, config);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const addBlogCategory = async(data) => {
    try{
        const response = await axios.post(`${base_url}blogcategories/new`, data, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const bcategoryService = {
    getBlogCategory,
    addBlogCategory
};

export default bcategoryService;
