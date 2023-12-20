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

const rejected = (state) => {
  state.isLoading = false;
  state.isLoggedIn = false;
};

const initialState = {
  user: null,
  accessToken: "",
  refreshToken: "",
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
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.accessToken = payload.accessToken;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.accessToken = payload.accessToken;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, () => ({ ...initialState }))
      .addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
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
