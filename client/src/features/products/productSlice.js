import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";

export const getAllProducts = createAsyncThunk("product/get", async(thunkAPI) => {
    try {
        return await productService.getProducts();
    }catch(error){
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

export const addToWishList = createAsyncThunk("product/wishlist", async(prodId, thunkAPI) => {
    try {
        return await productService.addToWishList(prodId);
    }catch(error){
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

const productState = {
    product: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: null,
};

export const productSlice = createSlice({
    name: "product",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.errorMessage = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.product = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.error.message;
            })
            .addCase(addToWishList.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.errorMessage = null;
            })
            .addCase(addToWishList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.product = state.product.map(product => {
                    if (product._id === action.payload._id) {
                        return action.payload;
                    }
                    return product;
                });
                state.message = "Product added to wishlist!";
            })
            .addCase(addToWishList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.errorMessage = action.error.message;
            });
    }
});

export default productSlice.reducer;
