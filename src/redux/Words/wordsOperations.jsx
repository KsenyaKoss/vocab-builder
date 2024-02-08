import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import Notiflix from "notiflix";

// axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

export const getCategoriesListThunk = createAsyncThunk(
  "words/categories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/words/categories");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getStatisticsThunk = createAsyncThunk(
  "words/statistics",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/words/statistics");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getWordsAll = createAsyncThunk(
  "words/all",
  async (
    _,
    { rejectWithValue }
  ) => {
    try {
      // const params = {
      //   keyword,
      //   category,
      //   isIrregular,
      //   // page,
      //   // limit,
      // };

      // const filteredParams = Object.fromEntries(
      //   Object.entries(params).filter(([_, value]) => value !== undefined)
      // );
      const res = await axios.get("/words/all");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
