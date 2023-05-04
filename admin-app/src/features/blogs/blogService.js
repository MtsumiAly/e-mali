import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";


const getBlogs = async() => {
    const response = await axios.get(`${base_url}blogs/all`, config);
    return response.data;
};


const blogService = {
    getBlogs,};

export default blogService;