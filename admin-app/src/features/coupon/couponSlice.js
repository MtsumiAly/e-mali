import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import couponService from "./couponService";

export const getAllCoupons = createAsyncThunk("coupons/getAll", async (_, thunkAPI) => {
  try {
    const response = await couponService.getCoupons();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addNewCoupon = createAsyncThunk(
  "coupons/addNewCoupon",
  async (newCouponData) => {
    try {
      const response = await couponService.addCoupon(newCouponData);
      return response;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
);


const initialState = {
  coupons: [],
  newCoupon: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const couponSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCoupons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCoupons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coupons = action.payload;
        state.message = "Got the Coupons"
      })
      .addCase(getAllCoupons.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Failed To Fetch Coupons";
      })
      .addCase(addNewCoupon.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = "";
      })
      .addCase(addNewCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.newCoupon = action.payload;
        state.message = "New Coupon Added Successfully";
      })
      .addCase(addNewCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });
    },
});


export default couponSlice.reducer;