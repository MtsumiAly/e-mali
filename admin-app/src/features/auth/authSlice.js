import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

const getUserFromLocalStorage = localStorage.getItem("user") 
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const initialState = {
    user: getUserFromLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const login = createAsyncThunk("auth/admin-login", async(user, thunkAPI) => {
    try{
        return await authService.login(user);
    }catch(error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.isError = false;
          state.isLoading = true;
          state.isSuccess = false;
          state.message = "";
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user = action.payload;
          state.message = "Promise Fulfilled";
        })
        .addCase(login.rejected, (state, action) => {
          state.isError = true;
          state.isLoading = false;
          state.isSuccess = false;
          state.message = action.payload ? action.payload : action.error.message;
        });
    },
  });

  export default authSlice.reducer;
  