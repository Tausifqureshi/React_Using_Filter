// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const fetchData = createAsyncThunk("product/fetchProducts", async () => {
//   try {
//     const response = await axios.get("https://dummyjson.com/products");
//     console.log(" response", response.data.products);
//     return response.data.products;
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     data: [],
//     // cart: JSON.parse(localStorage.getItem("cart")) || [], //✅ Refresh hone ke baad bhi cart save rahega
//     cart: JSON.parse(localStorage.getItem('cart')) ?? [], //✅ Refresh hone ke baad bhi cart save rahega
//     loading: false,
//     error: null,
//   },

//   reducers: {
//     // Add to cart
//     addToCart: (state, action) => {
//       state.cart.push(action.payload);
//       console.log("cart", action);
//       localStorage.setItem("cart", JSON.stringify(state.cart)); //✅ Cart ko local storage mein save kar re hain.
//       console.log("Cart Updated (After Add):", [...state.cart]);

//       // return {  
//       // ...state, // Pura state ko copy karo
//       //   cart: [...state.cart, action.payload], // Purane cart ko copy karke naye product ko add kar
//       // };
//     },

//     // Remove from cart
//     removeFromCart: (state, action) => {
//       // return {
//       //   ...state,
//       //   cart: state.cart.filter((item) => item.id !== action.payload),
//       // };

//       state.cart = state.cart.filter((item) => item.id !== action.payload);
//       localStorage.setItem("cart", JSON.stringify(state.cart)); // ✅ Local storage update karo
//       console.log("Cart Updated (After Remove):", state.cart);
//     },

//     // Increment quantity
//     // incrementQuantity: (state, action) => {
//     //   // return {
//     //   //   ...state,    // Pura state ko copy karo
//     //   //   cart: state.cart.map((item) => { // Cart mein jo bhi items hain unko map karo
//     //   //     if (item.id === action.payload) { // Agar item ka id action.payload ke barabar hai toh us item ka quantity increment karo
//     //   //       return { ...item, quantity: item.quantity + 1 }; // Item ko copy karke quantity increment karo
//     //   //     }

//     //   //     return item; // Agar item ka id action.payload ke barabar nahi hai toh us item ko as it is return karo
//     //   //   }),
//     //   // };
//     //   state.cart = state.cart.map((item) => { // Cart mein jo bhi items hain unko map karo
//     //     if (item.id === action.payload) { // Agar item ka id action.payload ke barabar hai toh us item ka quantity increment karo
//     //       return { ...item, quantity: item.quantity + 1 }; // Item ko copy karke quantity increment karo
//     //     }
//     //     return item; // Agar item ka id action.payload ke barabar nahi hai toh us item ko as it is return karo
//     //   });
//     // },

//     // Clear cart
//     clearCart: (state) => {
//       // return {
//       //   ...state,
//       //   cart: [],
//       // };

//       state.cart = [];
//       localStorage.removeItem("cart"); // ✅ Local storage se bhi clear karo
//       console.log("Cart Updated (After Remove):", state.cart);
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.loading = true; // Jab tak data load ho raha hai
//         // console.log("padding state...");
//       })

//       // `fulfilled` case, jab data successfully fetch ho gaya ho
//       .addCase(fetchData.fulfilled, (state, action) => {
//         // jo uperr axios me datat return kar re hai o is fulfiled wale me mile ga action.payload me
//         // console.log("actions mil ra hai yaha se fulfiled ka",action.payload);
//         state.loading = false; // Loading ko false set karna.
//         state.data = action.payload; // Data ko state mein store karna.
//       })
//       // `rejected` case, jab data fetch mein error aaye
//       .addCase(fetchData.rejected, (state, action) => {
//         // console.log("actions mil ra hai yaha se reject ka",action.error);
//         state.loading = false; // Loading ko false set karna
//         state.error = action.error.message; // Error ko state mein store karna
//       });
//   },
// });

// export const { fetchProducts, addToCart, removeFromCart, clearCart } =
//   productSlice.actions;
// export { fetchData }; // export fetchData thunk function aysnc
// console.log("productSlice", productSlice.actions);
// export default productSlice.reducer;









