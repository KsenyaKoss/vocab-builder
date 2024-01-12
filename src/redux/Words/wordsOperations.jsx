import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import Notiflix from "notiflix";
import { selectAccessToken } from "../Auth/authSelectors";
import { setToken } from "../Auth/authOperations";

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

export const getCategoriesListThunk = createAsyncThunk(
  "words/categories",
  async (_, { rejectWithValue, getState }) => {
    console.log(getState);
    const token = selectAccessToken(getState());
    setToken(token);
    console.log(token);
    try {
      
      const res = await axios.get("/words/categories");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
