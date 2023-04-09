import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "./blogService";

export const getAllBlogs = createAsyncThunk("blogs/get", async(thunkAPI) => {
    try {
        return await blogService.getBlogs();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});

export const getABlog = createAsyncThunk("blog/get", async(id, thunkAPI) => {
    try {
        return await blogService.getBlog(id);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});

const blogState = {
    blogs: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: null,
};

export const blogSlice = createSlice({
    name: "blogs",
    initialState: blogState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogs.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.errorMessage = null;
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.blogs = action.payload;
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.error.message;
            })
            .addCase(getABlog.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.errorMessage = null;
            })
            .addCase(getABlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.blog = action.payload;
            })
            .addCase(getABlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.error.message;
            });
    }
});

export default blogSlice.reducer;
