import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const setCustomer = (data) => {
  localStorage.setItem("customer", JSON.stringify(data));
};

const register = async(userData) => {
    const response = await axios.post(`${base_url}users/register`, userData);
    if(response.data){
        setCustomer(response.data);
        return response.data;
    }
};

const login = async(userData) => {
    const response = await axios.post(`${base_url}users/login`, userData);
    if(response.data){
        setCustomer(response.data);
        return response.data;
    }
};

const getUserWishList = async() => {
    const response = await axios.get(`${base_url}users/wishlist`, config);
    if (response.data) {
        return response.data;
    }
}

export const authService = { register, login, getUserWishList };
