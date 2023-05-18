import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";


const getProductCategory = async() => {
    try {
        const response = await axios.get(`${base_url}categories/all`, config);
        return response.data;
    } catch (error) {
        // console.log(error.response.data);
        throw error;
    }
};

const addCategory = async(data) => {
    try{
        const response = await axios.post(`${base_url}categories/new`, data, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const getProductcategoryById = async(id) => {
    try{
        const response = await axios.get(`${base_url}categories/${id}`, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const updateProductCategory = async(data) => {
    try{
        const response = await axios.put(`${base_url}categories/${data.id}`, { title: data.productCategoryData.title }, config);
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const deleteProductCategory = async(id) => {
    try{
        const response = await axios.delete(`${base_url}categories/${id}`, config);
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const pcategoryService = {
    getProductCategory,
    addCategory,
    updateProductCategory,
    deleteProductCategory,
    getProductcategoryById,
};

export default pcategoryService;