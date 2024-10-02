import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = null;
      state.isLoading = false;
    },

    signInFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    updateStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },

    updateFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    deleteUserStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = null;
    },

    deleteUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    signoutSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutSuccess,
} = userSlice.actions;

export default userSlice.reducer;
