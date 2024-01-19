import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import Notiflix from "notiflix";


// axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

export const getCategoriesListThunk = createAsyncThunk(
  "words/categories",
  async (_, { rejectWithValue}) => {
    try {
      const res = await axios.get("/words/categories");
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getStatisticsThunk = createAsyncThunk(
  "words/statistics",
  async (_, {rejectWithValue}) => {
    try {
      const res = await axios.get("/words/statistics");
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getWordsAll = createAsyncThunk(
  "words/all",
  async (query, {rejectWithValue}) => {
    try {
      
    } catch (error) {
      
    }
  }
)
