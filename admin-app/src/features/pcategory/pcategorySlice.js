import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pcategoryService from "./pcategoryService";

export const fetchCategories = createAsyncThunk(
  "pcategory/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await pcategoryService.getProductCategory();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addNewCategory = createAsyncThunk(
  "categories/addNewCategory",
  async (newCategoryData) => {
    try {
      const response = await pcategoryService.addCategory(newCategoryData)
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
);



const initialState = {
    productCategories: [],
    newPCategory: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };

export const pcategorySlice = createSlice({
  name: "productCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productCategories = action.payload;
        state.message = "Successfully got the product categories";
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(addNewCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(addNewCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.newPCategory = action.payload;
        state.message = "New Category added successfully";
      })
      .addCase(addNewCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export default pcategorySlice.reducer;

