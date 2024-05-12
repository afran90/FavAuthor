import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favAuthor: [],
};

const authorSlice = createSlice({
  name: "authorSlice",
  initialState,
  reducers: {
    addFavAuthor(state, action) {
      state.favAuthor = action.payload;
    },
    removeFavAuthor(state,action){
      state.favAuthor=state.favAuthor.filter(_=>_._id!==action.payload);
    },
    resetAll(state) {
      state.favAuthor = [];
    },
  },
});

export const {
  addFavAuthor,
  removeFavAuthor,
  resetAll
} = authorSlice.actions;

export default authorSlice.reducer;
