import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(" response", response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    cart: [],
    loading: false,
    error: null,
  },

  reducers: {
    // fetchProducts: (state, action) => {
    //      console.log("fetchProducts reducer called");
    //     //  state.products = action.payload;

    // },

    
    // Add to cart
    addToCart: (state, action) => {
      // state.cart.push(action.payload);
     // return [...state, action.payload]; // Add to cart mein jo bhi product aayega usko cart mein add karna.

      return {
        ...state, // Pura state ko copy karo
        cart: [...state.cart, action.payload], // Purane cart ko copy karke naye product ko add karo
      };
    },

    // Remove from cart
    removeFromCart: (state, action) => {
      // return {
      //   ...state,
      //   cart: state.cart.filter((item) => item.id !== action.payload),
      // };

      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    // Clear cart
    clearCart: (state) => {
      // return {
      //   ...state,
      //   cart: [],
      // };

      state.cart = [];
    },


  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true; // Jab tak data load ho raha hai
        // console.log("padding state...");
      })

      // `fulfilled` case, jab data successfully fetch ho gaya ho
      .addCase(fetchProduct.fulfilled, (state, action) => {
        // jo uperr axios me datat return kar re hai o is fulfiled wale me mile ga action.payload me
        // console.log("actions mil ra hai yaha se fulfiled ka",action.payload);
        state.loading = false; // Loading ko false set karna.
        state.data = action.payload; // Data ko state mein store karna.
      })
      // `rejected` case, jab data fetch mein error aaye
      .addCase(fetchProduct.rejected, (state, action) => {
        // console.log("actions mil ra hai yaha se reject ka",action.error);
        state.loading = false; // Loading ko false set karna
        state.error = action.error.message; // Error ko state mein store karna
      });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
