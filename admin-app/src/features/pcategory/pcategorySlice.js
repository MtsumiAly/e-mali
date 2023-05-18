import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pcategoryService from "./pcategoryService";

export const fetchCategories = createAsyncThunk(
  "pcategory/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const response = await pcategoryService.getProductCategory();
      return response;
    } catch (error) {
      console.log(error)
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

export const getAProductCategory = createAsyncThunk(
  "categories/getAProductCategory",
  async (id) => {
    try {
      const response = await pcategoryService.getProductcategoryById(id);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
);

export const updateAProductCategory = createAsyncThunk(
  "categories/updateAProductCategory",
  async (id, productCategoryData) => {
    try {
      const response = await pcategoryService.updateProductCategory(id, productCategoryData);
      return response;
    } catch (error) {
      console.log(error)
      throw new Error(error.response.data.error);

    }
  }
);

export const deleteAProductCategory = createAsyncThunk(
  "categories/deleteAProductCategory",
  async (id) => {
    try {
      const response = await pcategoryService.deleteProductCategory(id);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
);

const initialState = {
    productCategories: [],
    newPCategory: [],
    Pcategory: [],
    updatedPCategory: [],
    deletedPCategory: [],
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
      }).addCase(getAProductCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(getAProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.Pcategory = action.payload.title;
        state.message = `Successfully Got Your Product Category By ID: ${state.Pcategory}`;
      })
      .addCase(getAProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      .addCase(updateAProductCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(updateAProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.updatedPCategory = action.payload.title;
        state.message = "Successfully Updated The Product Category";
      })
      .addCase(updateAProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
      })
      .addCase(deleteAProductCategory.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(deleteAProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.deletedPCategory = action.payload.title;
        state.message = "Successfully Deleted The Product Category!";
      })
      .addCase(deleteAProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      })
      ;
  },
});

export default pcategorySlice.reducer;

