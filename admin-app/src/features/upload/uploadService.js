import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosConfig";

const uploadImg = async (data) => {
  try {
    const response = await axios.post(`${base_url}product_images/upload`, data, config);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw new Error(error.response.data);
    
  }
};

const deleteImg = async (id) => {
  try {
    const response = await axios.delete(`${base_url}product_images/delete/${id}`, config);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const uploadService = { uploadImg, deleteImg };

export default uploadService;
