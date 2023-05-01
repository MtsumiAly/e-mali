import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import uploadService from './uploadService';

export const uploadImage = createAsyncThunk(
  'upload/uploadImage',
  async (data, thunkAPI) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        formData.append("images", data[i]);
      }
      const response = await uploadService.uploadImg(formData);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const deleteImage = createAsyncThunk(
  'upload/deleteImage',
  async (id, thunkAPI) => {
    try {
      const response = await uploadService.deleteImg(id);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  images: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = action.payload;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload ? action.payload : true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Image successfully deleted";
        // Filter out the deleted image from the state
        state.images = [];

      })
      .addCase(deleteImage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload ? action.payload : true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default uploadSlice.reducer;
