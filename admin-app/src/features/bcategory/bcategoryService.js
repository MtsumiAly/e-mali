import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";


const getBlogCategory = async() => {
    try {
        const response = await axios.get(`${base_url}blogcategories/all`, config);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const addBlogCategory = async(data) => {
    try{
        const response = await axios.post(`${base_url}blogcategories/new`, data, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const getBlogCategoryById = async(id) => {
    try{
        const response = await axios.get(`${base_url}blogcategories/${id}`, config);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const updateBlogCategory = async(data) => {
    try{
        const response = await axios.put(`${base_url}blogcategories/${data.id}`, { title: data.BlogCategoryData.title }, config);
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const deleteBlogCategory = async(id) => {
    try{
        const response = await axios.delete(`${base_url}blogcategories/${id}`, config);
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error.response.data);
        throw error;
    }
};

const bcategoryService = {
    getBlogCategory,
    addBlogCategory,
    updateBlogCategory,
    deleteBlogCategory,
    getBlogCategoryById
};

export default bcategoryService;
