import configureStore from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    // reducers
    products: productSlice,
  },
});

export default store;
