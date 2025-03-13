import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {          
  user: JSON.parse(localStorage.getItem("user")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  },
  reducers: { 
    
 
  },
});

export default formSlice.reducer;
