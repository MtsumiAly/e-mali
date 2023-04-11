import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bcategoryService from "./bcategoryService";

export const fetchBlogCategories = createAsyncThunk(
  "bcategory/fetchBlogCategories",
  async (_, thunkAPI) => {
    try {
      const response = await bcategoryService.getBlogCategory();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
    blogCategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };

export const bcategorySlice = createSlice({
  name: "blogCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogCategories = action.payload;
        state.message = "Successfully fulfilled Blog category promise";
      })
      .addCase(fetchBlogCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export default bcategorySlice.reducer;

