import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { authService } from "./userService";

export const registerUser = createAsyncThunk("auth/register", async(userData, thunkAPI) => {
    try {
        return await authService.register(userData);
    }catch(error){
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

export const loginUser = createAsyncThunk("auth/login", async(userData, thunkAPI) => {
    try {
        return await authService.login(userData);
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});

export const getUserProductWishList = createAsyncThunk("user/wishlist", async(thunkAPI) => {
    try {
        return await authService.getUserWishList();
    }catch(error){
        return thunkAPI.rejectWithValue(error);
    }
});


const getUserFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;



const initialState = {
    user: getUserFromLocalStorage,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
    wishlistProducts: []    
}

export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.isLoading=true;
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdUser = action.payload;
            if (state.isSuccess === true) {
                toast.info("User Created Successfully");
            }
        }).addCase(registerUser.rejected, (state, action) => {
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.payload?.message || "Error occured";
            if (state.isError === true) {
                toast.error(state.message);
            }
        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading=true;
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.user = action.payload;
            if (state.isSuccess === true) {
                localStorage.setItem("token", action.payload.token);
                toast.info("User Logged in Successfully");
            }
        }).addCase(loginUser.rejected, (state, action) => {
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.payload?.message || "Error occured";
            if (state.isError === true) {
                toast.error(state.message);
            }
        }).addCase(getUserProductWishList.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUserProductWishList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.wishlistProducts = action.payload; 
            state.message = action.payload?.message || "Error occured";
            if (state.isError === true) {
                toast.error(state.message);
            }
        })
        .addCase(getUserProductWishList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        });
    }
});

export default authSlice.reducer;