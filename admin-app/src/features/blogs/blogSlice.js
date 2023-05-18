import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, thunkAPI) => {
    try {
      const response = await blogService.getBlogs();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addNewBlog = createAsyncThunk(
  "blogs/addNewBlog",
  async (newBlogData) => {
    try {
      const response = await blogService.addBlog(newBlogData);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
);

const initialState = {
  blogs: [],
  createdBlog: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload;
        state.message = "Successfully Got all blogs";
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(addNewBlog.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Successfully Added A New Blog";
        state.createdBlog = action.payload;
      })
      .addCase(addNewBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      });
  },
});


export default blogSlice.reducer;