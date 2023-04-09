import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandService from "./brandService";

export const getAllBrands = createAsyncThunk("brands/getAll", async (_, thunkAPI) => {
  try {
    const response = await brandService.getBrands();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  brands: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.brands = action.payload;
      })
      .addCase(getAllBrands.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Failed to fetch brands";
      });
  },
});


export default brandSlice.reducer;