import {configureStore} from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pcategoryReducer from '../features/pcategory/pcategorySlice';
import blogReducer from "../features/blogs/blogSlice";
import bcategoryReducer from '../features/bcategory/bcategorySlice';
import orderReducer from "../features/orders/orderSlice";
import uploadReducer from "../features/upload/uploadSlice";


export const store = configureStore({
    reducer: { 
        auth: authReducer, 
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        pcategory: pcategoryReducer,
        blog: blogReducer,
        blogcategory: bcategoryReducer,
        order: orderReducer,
        upload: uploadReducer,
    },
});