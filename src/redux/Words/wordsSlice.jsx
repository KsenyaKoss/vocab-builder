import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesListThunk } from "./wordsOperations";

const pending = (state) => (state.isLoading = true);

const rejected = (state) => {
  state.isLoading = false;
  // state.error = payload.error;
};

const initialState = {
  categories: [],
  wordsAll: [],
  wordsOwn: [],
  isLoading: false,
  error: null,
};

const wordsSlice = createSlice({
  name: "words",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getCategoriesListThunk.pending, pending)
      .addCase(getCategoriesListThunk.rejected, rejected)
      .addCase(getCategoriesListThunk.fulfilled, (state, payload) => {
        console.log("Fulfilled", payload);
        // state.categories = payload;
        state.isLoading = false;
        state.error = null;
      }),
});

export const wordsReducer = wordsSlice.reducer;
