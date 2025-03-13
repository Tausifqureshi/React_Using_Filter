import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || [],
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  },
  reducers: {
    signup: (state, action) => {
      // const user = action.payload;
      // state.user.push(user);
      // localStorage.setItem("user", JSON.stringify(state.user));
      return [...state, action.payload];
    },
  },
});

export default formSlice.reducer;
