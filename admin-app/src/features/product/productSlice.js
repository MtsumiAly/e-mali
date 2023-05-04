import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

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

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (newProductData) => {
    try {
      const response = await productService.addProduct(newProductData);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
);



const initialState = {
  products: [],
  createdProduct: [],
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
        state.message = "Successfully got all the Products";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Successfully added a new product";
        state.createdProduct = action.payload;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      });
  },
});


export default productSlice.reducer;