import React from "react";
import craeteSlice from "@reduxjs/toolkit";

const formSlice = craeteSlice({
  name: "form",
  initialState: {          
   user: null
  },
  reducers: {

    signup: (state, action) => {
      state.user = action.payload;
    },

    loging: (state, action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null
    }
  },
});

export default formSlice.reducer;