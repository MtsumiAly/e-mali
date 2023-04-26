import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import uploadService from './uploadService';

export const uploadImage = createAsyncThunk(
    'upload/uploadImage',
    async (formData, { rejectWithValue }) => {
      try {
        const response = await uploadService.uploadImg(formData);
        return response;
      } catch (err) {
        return rejectWithValue(err.response.data);
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
      });
  },
});

export default uploadSlice.reducer;
