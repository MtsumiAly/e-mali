import axios from "axios";
import { base_url } from "../../utils/base_url";


const login = async(userData) => {
    const response = await axios.post(`${base_url}users/admin-login`, userData);
    console.log(response.data)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
};


const authService = {
    login,
};

export default authService;