import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await productService.getProducts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const addNewProduct = createAsyncThunk(
//   "products/addNewProduct",
//   async (newProductData) => {
//     try {
//       const response = await productService.addProduct(newProductData);
//       return response;
//     } catch (error) {
//       throw new Error(error.response.data.error);
//     }
//   }
// );

export const addNewProduct = createAsyncThunk(
  "product/addNewProduct",
  async (product, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/products/new", product);
      return response.data;
    } catch (err) {
      if (err.response.status === 409) {
        return rejectWithValue("Product already exists");
      }
      return rejectWithValue(err.response.data.message);
    }
  }
);


const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
        state.message = "Successfully fulfilled products promise";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products.push(action.payload);
        state.message = "Successfully added new product";
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      });
  },
});


export default productSlice.reducer;