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
      // const updatedUsers = [...state.user, action.payload]; // Naya user array me add karo
      // localStorage.setItem("user", JSON.stringify(updatedUsers)); // ✅ LocalStorage me save karo

      // return {
      //   ...state, // Baaki state properties ko same rakho
      //   user: updatedUsers, // User array ko update karo
      // };

      const user = action.payload;
      state.user.push(user);
      localStorage.setItem("user", JSON.stringify(state.user));

      // return {
      //   ...state, // Pure object ko copy karo
      //   user: [...state.user, action.payload], // User array ko update karo
      // };
    },
  },
});

export default formSlice.reducer;
