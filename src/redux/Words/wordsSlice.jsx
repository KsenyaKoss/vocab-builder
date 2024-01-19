import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesListThunk, getStatisticsThunk } from "./wordsOperations";

const pending = (state) => {
  state.isLoading = true};

const rejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  categories: [],
  totalCount: "",
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
      .addCase(getCategoriesListThunk.fulfilled, (state, {payload}) => {
        state.categories = payload;
        state.isLoading = false;
       
      })
    .addCase(getStatisticsThunk.pending, pending)
    .addCase(getStatisticsThunk.rejected, rejected)
    .addCase(getStatisticsThunk.fulfilled, (state, {payload: {totalCount}})=> {
      state.totalCount = totalCount;
      state.isLoading = false;
      state.error = null;
    })
      ,
});

export const wordsReducer = wordsSlice.reducer;
