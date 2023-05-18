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

const addBrand = async(data) => {
    try{
        const response = await axios.post(`${base_url}brands/new`, data, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const getBrandById = async(id) => {
    try{
        const response = await axios.get(`${base_url}brands/${id}`, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const updateBrand = async(data) => {
    try{
        const response = await axios.put(`${base_url}brands/${data.id}`, { title: data.brandData.title }, config);
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const deleteBrand = async(id) => {
    try{
        const response = await axios.delete(`${base_url}brands/${id}`, config);
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const brandService = {
    getBrands,
    addBrand,
    getBrandById,
    updateBrand,
    deleteBrand,
};

export default brandService;