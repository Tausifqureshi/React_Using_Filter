import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk("product/fetchProducts", async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(" response", response.data.products);
    return response.data.products;
  } catch (error) {
    console.log(error.message);
  }
});

const productSlice = createSlice({
  name: "product",

  initialState: {
    data: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [], //✅ Refresh hone ke baad bhi cart save rahega
    loading: false,
    error: null,
  },

  reducers: {
    // Add to cart
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      console.log("cart", action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart)); //✅ Cart ko local storage mein save kar re hain.
      console.log("Cart Updated (After Add):", [...state.cart]);

      // return {
      //   ...state, //Pura state copy karo (data, cart, loading, error sab kuch)
      //     cart: [...state.cart, action.payload], // Purane cart ko copy karke naye product ko add kar

      //   };

      // const updatedCart = [...state.cart, action.payload]; // Purane cart me naye product ko add kar rahe hain
      // localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Local storage ko update kar rahe hain

      // return {
      //   ...state, // Pura state ko copy kar rahe hain
      //   cart: updatedCart, // Naya cart update kar rahe hain
      // };
    },

    // Remove from cart
    removeFromCart: (state, action) => {
      // return {
      //   ...state,
      //   cart: state.cart.filter((item) => item.id !== action.payload),
      // };

      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart)); // ✅ Local storage update karo
      console.log("Cart Updated (After Remove):", state.cart);

      // const updatedCart = state.cart.filter((item) => item.id !== action.payload); // 🗑️ Selected item hatao
      // localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ LocalStorage update karo

      // return {
      //   ...state, // Pure state ko copy karo
      //   cart: updatedCart, // Cart update karo
      // };
    },

    // incrementQuantity
    incrementQuantity: (state, action) => {
      // mutable code but map use
      //   state.cart = state.cart.map((item) =>
      // // 🔹 Pehla `state.cart` (Right Side) → OLD cart le raha hai aur `map()` function chala raha hai
      // // 🔹 Doosra `state.cart` (Left Side) → NEW updated cart ko wapas state me save kar raha hai
      //     // ✅ Agar item ka ID match karta hai, toh quantity +1 karo
      //     item.id === action.payload
      //       ? { ...item, quantity: item.quantity + 1 } // 🆕 Naya object banaya jisme quantity update kar diya
      //       : item // ❌ Jo match nahi karta, usko same rakh do
      //   );

      //   localStorage.setItem("cart", JSON.stringify(state.cart)); //Yeh NEW updated cart hai, jo ab localStorage me save hoga
      //   console.log("Cart Updated (After Increment):", state.cart); // ✅ Debug ke liye

      // mutable code but find use
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1; // ✅ Directly modify kar sakte ho Redux Toolkit me (Immer use karta hai)
        localStorage.setItem("cart", JSON.stringify(state.cart)); // ✅ Sirf cart save ho
      }
      console.log("Cart Updated (After Increment):", state.cart);

      // imutable code
      // const updatedCart = state.cart.map((item) => {
      //   if (item.id === action.payload) {
      //     return { ...item, quantity: item.quantity + 1 };
      //   }
      //   return item;
      // });
      // localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ LocalStorage update karo

      // return {
      //   ...state, // Pure state ko copy karo
      //   cart: updatedCart, // Cart update karo
      // };
    },

    // Clear cart
    clearCart: (state) => {
      // localStorage.removeItem("cart"); // ✅ Pura cart localStorage se hatao
      // return {
      //   ...state, // Pure state ko copy karo
      //   cart: [], // Cart ko empty karo
      // };

      state.cart = [];
      localStorage.removeItem("cart"); // ✅ Local storage se bhi clear karo
      console.log("Cart Updated (After Remove):", state.cart);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true; // Jab tak data load ho raha hai
        // console.log("padding state...");
      })

      // `fulfilled` case, jab data successfully fetch ho gaya ho
      .addCase(fetchData.fulfilled, (state, action) => {
        // jo uperr axios me datat return kar re hai o is fulfiled wale me mile ga action.payload me
        // console.log("actions mil ra hai yaha se fulfiled ka",action.payload);
        state.loading = false; // Loading ko false set karna.
        state.data = action.payload; // Data ko state mein store karna.
      })
      // `rejected` case, jab data fetch mein error aaye
      .addCase(fetchData.rejected, (state, action) => {
        // console.log("actions mil ra hai yaha se reject ka",action.error);
        state.loading = false; // Loading ko false set karna
        state.error = action.error.message; // Error ko state mein store karna
      });
  },
});

export const {
  fetchProducts,
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
} = productSlice.actions;
export { fetchData }; // export fetchData thunk function aysnc
console.log("productSlice", productSlice.actions);
export default productSlice.reducer;
