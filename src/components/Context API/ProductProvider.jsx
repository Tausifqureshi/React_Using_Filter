import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  addToCart,
  removeFromCart,
  clearCart,
} from "../../Redux/productSlice";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const dispatch = useDispatch();
  const { data, cart, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <ProductContext.Provider
      value={{
        data,
        cart,
        loading,
        error,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
        key: "product Fetching Data from Redux",
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

// export const useProductContext = () => useContext(ProductContext);
export const useProductContext = () => {
return useContext(ProductContext);
};
export default ProductProvider;






// import React, { createContext, useContext, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData, addToCart, removeFromCart, clearCart } from "../../Redux/productSlice";

// const ProductContext = createContext();

// function ProductProvider({ children = null }) { // ✅ Default value to children
//   const dispatch = useDispatch();
//   const { data, cart, loading, error } = useSelector((state) => state.product);

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   const handleRemoveFromCart = (productId) => {
//     dispatch(removeFromCart(productId));
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <ProductContext.Provider value={{ data, cart, loading, error, handleAddToCart, handleRemoveFromCart, handleClearCart,
//         key: "product"
//     }}>
//       {children} {/* ✅ Ensure children is rendered */}
//     </ProductContext.Provider>
//   );
// }

// export const useProductContext = () => {
// return useContext(ProductContext);

// //   const context = useContext(ProductContext);
// //   if (!context) {
// //     throw new Error("useProductContext must be used within a ProductProvider");
// //   }
// //   return context;
// };

// // function useTodos() {
// //     return useContext(MyContext);
// //   }
// export default ProductProvider;
