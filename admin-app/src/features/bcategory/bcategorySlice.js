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

export const addNewBlogCategory = createAsyncThunk(
  "bcategory/addNewBlogCategory",
  async (newBlogCategoryData) => {
    try {
      const response = await bcategoryService.addBlogCategory(newBlogCategoryData);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
);


const initialState = {
    blogCategories: [],
    newBlogCategory: [],
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
        state.message = "Successfully Got All Blog Categories";
      })
      .addCase(fetchBlogCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(addNewBlogCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "Waiting for promise";
      })
      .addCase(addNewBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.newBlogCategory = action.payload;
        state.message = "New Blog Category Added Successfully";
      })
      .addCase(addNewBlogCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export default bcategorySlice.reducer;

