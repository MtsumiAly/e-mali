import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import brandService from "./brandService";

export const getAllBrands = createAsyncThunk("brands/getAll", async (_, thunkAPI) => {
  try {
    const response = await brandService.getBrands();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addNewBrand = createAsyncThunk(
  "brands/addNewBrand",
  async (newBrandData) => {
    try {
      const response = await brandService.addBrand(newBrandData);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
);


const initialState = {
  brands: [],
  newBrand: [],
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
        state.message = "Got the brands"
      })
      .addCase(getAllBrands.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Failed to fetch brands";
      })
      .addCase(addNewBrand.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(addNewBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.newBrand = action.payload;
        state.message = "New brand added successfully";
      })
      .addCase(addNewBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });
    },
});


export default brandSlice.reducer;