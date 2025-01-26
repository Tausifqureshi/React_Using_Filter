import configureStore from "@reduxjs/toolkit";
import Products from "./productSlice";

const store = configureStore({
    
    reducer: {  
        // reducers
        products: Products
        
        
    }
})

export default store;