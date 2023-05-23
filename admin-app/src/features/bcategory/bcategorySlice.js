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

export const getABlogCategory = createAsyncThunk(
  "bcategory/getABlogCategory",
  async (id) => {
    try {
      const response = await bcategoryService.getBlogCategoryById(id);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
);

export const updateABlogCategory = createAsyncThunk(
  "bcategory/updateABlogCategory",
  async (id, BlogCategoryData) => {
    try {
      const response = await bcategoryService.updateBlogCategory(id, BlogCategoryData);
      return response;
    } catch (error) {
      console.log(error)
      throw new Error(error.response.data.error);

    }
  }
);

export const deleteABlogCategory = createAsyncThunk(
  "bcategory/deleteABlogCategory",
  async (id) => {
    try {
      const response = await bcategoryService.deleteBlogCategory(id);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
);


const initialState = {
    blogCategories: [],
    newBlogCategory: [],
    blogCategory: {},
    updatedBlogCategory: {},
    deletedBlogCategory: {},
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
      })
      .addCase(getABlogCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getABlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogCategory = action.payload;
        state.message = "Successfully Got Blog Category";
      })
      .addCase(getABlogCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(updateABlogCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "Waiting for promise";
      })
      .addCase(updateABlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updatedBlogCategory = action.payload;
        state.message = "Blog Category Updated Successfully";
      })
      .addCase(updateABlogCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(deleteABlogCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "Waiting for promise";
      })
      .addCase(deleteABlogCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.deletedBlogCategory = action.payload;
        state.message = "Blog Category Deleted Successfully";
      })
      .addCase(deleteABlogCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });

  },
});

export default bcategorySlice.reducer;

