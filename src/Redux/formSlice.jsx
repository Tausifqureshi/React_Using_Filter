import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
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
