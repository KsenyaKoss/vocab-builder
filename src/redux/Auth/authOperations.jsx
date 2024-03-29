import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://vocab-builder-backend.p.goit.global/api";

export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk(
  "auth/signup",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post("/users/signup", user);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      if (error.message === "Request failed with status code 409") {
        Notiflix.Notify.failure("User with this email  already exist");
      } else {
        Notiflix.Notify.failure("Please enter valid data");
      }
      return rejectWithValue(error.message);
    }
  }
);


export const loginThunk = createAsyncThunk(
    'auth/signin',
    async (user, {rejectWithValue}) => {
        try {
            const res = await axios.post('/users/signin', user);
            setToken(res.data.token);
            return res.data;
        } catch (error) {
           Notiflix.Notify.failure(`Email doesn't exist or password is wrong`);
           return rejectWithValue(error.message);
        }
    }
);

export const logoutThunk = createAsyncThunk(
    'auth/logout',
    async (_, {rejectWithValue}) => {
        try {
            await axios.post('/users/signout');
            removeToken();
            Notiflix.Notify.success('Sign out success');
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
);

export const getCurrentUserThunk = createAsyncThunk(
    'auth/current',
    async (_, thunkAPI) => {
        const savedToken = thunkAPI.getState().auth.accessToken;
        try {
          console.log(savedToken);
            setToken(savedToken);
            const res = await  axios.get('users/current');
            console.log(res);
            return res.data;
        } catch (error) {
          if (error.response && error.response.status === 401) {
            Notiflix.Notify.error('Ошибка 401: Токен истек или неверен');
            // thunkAPI.dispatch(logoutThunk());
            removeToken();
          } else {
            // Обработка других ошибок
            thunkAPI.rejectWithValue(error.message);
          }
        }
    }
);

