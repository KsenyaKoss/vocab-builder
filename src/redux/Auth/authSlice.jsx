import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from "./authOperations";

const pending = (state) => {
  state.isLoading = true;
};

const rejected = (state, {payload}) => {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.error = payload
};

const initialState = {
  user: null,
  accessToken: "",
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registerThunk.pending, pending)
      .addCase(registerThunk.rejected, rejected)
      .addCase(loginThunk.pending, pending)
      .addCase(loginThunk.rejected, rejected)
      .addCase(logoutThunk.pending, pending)
      .addCase(logoutThunk.rejected, rejected)
      .addCase(getCurrentUserThunk.pending, pending)
      .addCase(getCurrentUserThunk.rejected, rejected)
      .addCase(registerThunk.fulfilled, (state, { payload: {email, name, token} }) => {
        state.user = {name, email};
        state.accessToken = token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload: {name, email, token} }) => {
        state.user = {name, email};
        state.accessToken = token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => { 
        state.user= null;
        state.accessToken= "";
        state.isLoggedIn= false;
        state.isLoading= false;
        state.error= null;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, {payload}) => {
        console.log(payload);
        state.user = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      }),
  reducers: {
    // logout: state => {
    //     state.isLoggedIn = false;
    //     state.accessToken = '';
    // },
  },
});

export const authReducer = authSlice.reducer;
// export const logout = authSlice.actions.logout;
