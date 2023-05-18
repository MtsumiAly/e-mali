import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";


const getBlogs = async() => {
    const response = await axios.get(`${base_url}blogs/all`, config);
    return response.data;
};

const addBlog = async(data) => {
    try{
        const response = await axios.post(`${base_url}blogs/new`, data, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const blogService = {
    getBlogs,
    addBlog,
};

export default blogService;