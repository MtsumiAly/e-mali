import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const register = async(userData) => {
    const response = await axios.post(`${base_url}users/register`, userData);
    if(response.data){
        return response.data;
    }
};

const login = async(userData) => {
    const response = await axios.post(`${base_url}users/login`, userData);
    if(response.data){
        return response.data;
    }
};

export const authService = { register, login };