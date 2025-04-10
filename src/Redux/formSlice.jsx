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
  
      const users = action.payload;
      state.user.push(users);
      localStorage.setItem("user", JSON.stringify(state.user));

      // return {
      //   ...state, // Pure object ko copy karo
      //   user: [...state.user, action.payload], // User array ko update karo
      // };
    },

    login: (state, action) => {
      // return {
      //   ...state,
      //   currentUser: action.payload,
      // };  // 🔹 Purane state ko copy karke, sirf currentUser update kar raha tha


      const firstUser = state.currentUser = action.payload;      
     // 🔹 action.payload me jo user ka data aaya, usko state.currentUser me daal diya
    // 🔹 Wahi data firstUser variable me bhi store kar diya (Ek hi line me dono kaam ho gaye)

      localStorage.setItem("currentUser", JSON.stringify(firstUser));
    // 🔹 firstUser ko JSON format me convert karke localStorage me store kiya
    // 🔹 Taaki page refresh hone ke baad bhi user login rahe



      //  const firstUser = state.currentUser = action.payload;
      //   localStorage.setItem("currentUser", JSON.stringify(firstUser));

      //   return {
      //     ...state,
      //     currentUser: firstUser,
      //   }
    },  

    logout: (state) => {
      localStorage.removeItem("currentUser");
      return {
        ...state,
        currentUser: null,
      };

      // return {
      //   ...state,
      //   currentUser: null,
      // };
    },
  },   
});        


export const { signup, login, logout } = formSlice.actions;

export default formSlice.reducer;
