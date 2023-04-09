import axios from "axios";
import { base_url } from "../../utils/base_url.js";
import { config } from "../../utils/axiosConfig";

const getBrands = async() => {
    try {
        const response = await axios.get(`${base_url}brands/all`, config);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};


const brandService = {
    getBrands,
};

export default brandService;