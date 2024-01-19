import { configureStore } from "@reduxjs/toolkit";


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
import { authReducer } from "./Auth/authSlice";
import { wordsReducer } from "./Words/wordsSlice";

  const persistConfig = {
    key: 'token',
    version: 1,
    storage,
    whitelist: ['accessToken', 'refreshToken'],
  };

  const persistConfigForWords = {
    key: 'words',
    version: 1,
    storage,
  }

export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducer),
        words:  persistReducer(persistConfigForWords, wordsReducer),
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});


export const persistor = persistStore(store);
