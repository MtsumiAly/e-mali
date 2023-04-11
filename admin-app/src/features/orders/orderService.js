import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";


const getOrders = async() => {
    try {
        const response = await axios.get(`${base_url}orders/all`, config);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};


const orderService = {
    getOrders,
};

export default orderService;
