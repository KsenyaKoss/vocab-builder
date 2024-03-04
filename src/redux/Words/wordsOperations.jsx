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
    { keyword, category, isIrregular, page, limit },
    { rejectWithValue }
  ) => {
    try {
      let url = `/words/all?`

      if(keyword) {
        url += `keyword=${keyword}&`;
      }

      if(category){
        url += `category=${category}&`;
      }

      if(isIrregular){
        url += `isIrregular=${isIrregular}&`;
      }

      if(page && limit){
        url +=`page=${page}&limit=${limit}`;
      }
      console.log(url);
      const res = await axios.get(url);
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const addWordThunk = createAsyncThunk(
  'words/create',
  async ( newWord, {rejectWithValue}) => {
    try {
      const res = await axios.post("words/create", newWord);
      return res.data
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
)
