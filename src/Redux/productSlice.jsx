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
    // Add to cart. mutate code
    addToCart: (state, action) => {
      // mutable code
      state.cart.push(action.payload);
      console.log("cart", action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart)); //✅ Cart ko local storage mein save kar re hain.
      console.log("Cart Updated (After Add):", [...state.cart]);

      // immutable code
      // return {
      //   ...state, //Pura state copy karo (data, cart, loading, error sab kuch)
      //     cart: [...state.cart, action.payload], // Purane cart ko copy karke naye product ko add kar

      //   };

      // immutable code
      // const updatedCart = [...state.cart, action.payload]; // Purane cart me naye product ko add kar rahe hain
      // localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Local storage ko update kar rahe hain

      // return {
      //   ...state, // Pura state ko copy kar rahe hain
      //   cart: updatedCart, // Naya cart update kar rahe hain
      // };
    },

    // Remove from cart
    removeFromCart: (state, action) => {
      // mutable code
      // return {
      //   ...state,
      //   cart: state.cart.filter((item) => item.id !== action.payload),
      // };

      // mutable code
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart)); // ✅ Local storage update karo
      console.log("Cart Updated (After Remove):", state.cart);

      
      // immutable code
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

    // decrementQuantity
    decrementQuantity: (state, action) => {
      // mutable code map use
      //   state.cart = state.cart.map((item) =>
      //     item.id === action.payload && item.quantity > 1
      //       ? { ...item, quantity: item.quantity - 1 }
      //       : item
      //   );
      //   localStorage.setItem("cart", JSON.stringify(state.cart)); // ✅ LocalStorage update karo
      //   console.log("Cart Updated (After Decrement):", state.cart);

      // mutable code but find use
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; // ✅ Directly modify kar sakte ho Redux Toolkit me (Immer use karta hai)
        localStorage.setItem("cart", JSON.stringify(state.cart)); // ✅ Sirf cart save ho
      }
      console.log("Cart Updated (After Decrement):", state.cart);

      // immutable code
      // const updatedCart = state.cart.map((item) => {
      //   if (item.id === action.payload && item.quantity > 1) {
      //     return { ...item, quantity: item.quantity - 1 };
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
  // ✅ Immutable code
  // state ko directly mutate nahi karte
  // localStorage.removeItem("cart"); // ✅ Pura cart localStorage se hatao
  // return {
  //   ...state,         // ✅ Pure state ko copy karte hain (spread operator se)
  //   cart: [],         // ✅ Cart ko naya empty array assign karte hain
  // };

  // ✅ Mutable code
  // state.cart ko directly mutate karte hain
  state.cart = []; // ❌ state ke andar cart ko directly mutate kiya
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
        state.data = action.payload;  // ✅ API se aaya hua data 'action.payload' me hota hai, usko 'state.data' me save kar rahe hain

        //action.payload se data milra hai jo uperr axios se fetch kiya hai. us data ko ham data state me store karenge.
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
  decrementQuantity,
} = productSlice.actions;
export { fetchData }; // export fetchData thunk function aysnc
console.log("productSlice", productSlice.actions);
export default productSlice.reducer;
