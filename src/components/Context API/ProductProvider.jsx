// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchData,
//   addToCart,
//   removeFromCart,
//   clearCart,
// } from "../../Redux/productSlice"; 

// const ProductContext = createContext();

// function ProductProvider({ children }) {
//   console.log("Product-provider Component Rendered");

//   //✅ Default value to children
//   const dispatch = useDispatch();
//   const { data, cart, loading, error } = useSelector((state) => state.product);
//   // const useProdutc = useSelector((state) => state.product);
//   // console.log("PRODUCT DATA FROM REDUX",useProdutc);

//   const [filteredProducts, setFilteredProducts] = useState(data || []); // Filtered products state
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [bucketFiltering, setBucketFiltering] = useState(null);
//   const [selectedPriceRange, setSelectedPriceRange] = useState(0);

//   //  Fetch data from API
//   useEffect(() => {
//     console.log("useEffec Called");
//     dispatch(fetchData());
//     // fetchData();
//   }, [dispatch]);

//   // ✅ Jab bhi `data` update hoga, `setFilteredProducts(data)` call hoga
//   useEffect(() => {
//     // ✅ Jab bhi `data` update hoga, `setFilteredProducts(data)` call hoga
//     // ✅ Yani `filteredProducts` automatically update ho jayega bina kisi manual trigger ke.
//     setFilteredProducts(data);
//   }, [data]); // ✅ Dependency array me `data` diya hai, iska matlab ye hai ki jab bhi `data` change hoga tabhi effect chalega.

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
//     <ProductContext.Provider
//       value={{
//         data,
//         cart,
//         loading,
//         error,
//         handleAddToCart,
//         handleRemoveFromCart,
//         handleClearCart,
//         filteredProducts,
//         setFilteredProducts,
//         searchQuery,
//         setSearchQuery,
//         selectedCategories,
//         setSelectedCategories,
//         bucketFiltering,
//         setBucketFiltering,
//         selectedPriceRange,
//         setSelectedPriceRange,

//         App: "product Fetching Data from Redux",
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// }

// export const useProductContext = () => {
//   return useContext(ProductContext);
// };
// export default ProductProvider;



    

 
 




// Process completed successfully.
 
import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addToCart, removeFromCart, clearCart } from "../../Redux/productSlice";
const ProductContext = createContext();

function ProductProvider({ children }) {
  const dispatch = useDispatch();
  const { data, cart, loading, error } = useSelector((state) => state.product);

  const [filteredProducts, setFilteredProducts] = useState(data || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [bucketFiltering, setBucketFiltering] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);

  const handleAddToCart = useCallback((product) => {
    dispatch(addToCart(product));
  }, [dispatch]);

  const handleRemoveFromCart = useCallback((productId) => {
    dispatch(removeFromCart(productId));
  }, [dispatch]);

  const handleClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const contextValue = useMemo(() => ({
    data,
    cart,
    loading,
    error,
    handleAddToCart,
    handleRemoveFromCart,
    handleClearCart,
    filteredProducts,
    setFilteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategories,
    setSelectedCategories,
    bucketFiltering,
    setBucketFiltering,
    selectedPriceRange,
    setSelectedPriceRange,
    ratingFilter,
   setRatingFilter,
   selectedBrand,  // ✅ Fix: Add this
   setSelectedBrand // ✅ Fix: Add this
  }), [
    data,
    cart,
    loading,
    error,
    filteredProducts,
    searchQuery,
    selectedCategories,
    bucketFiltering,
    selectedPriceRange,
    ratingFilter,
    selectedBrand, 
    setSelectedBrand,
    handleAddToCart,
    handleRemoveFromCart,
    handleClearCart,
   
  ]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => useContext(ProductContext);
export default ProductProvider;
