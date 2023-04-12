import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const login = async(userData) => {
    try {
        const response = await axios.post(`${base_url}users/admin-login`, userData);
        console.log(response.data)
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const authService = {
    login,
};

export default authService;
