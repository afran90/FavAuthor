import { configureStore } from "@reduxjs/toolkit";
import authorSlice from "../pages/authorSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, authorSlice);

const store = configureStore({
  reducer: {
    author:persistedReducer
  },
});
const persistor = persistStore(store);

export { store, persistor };
