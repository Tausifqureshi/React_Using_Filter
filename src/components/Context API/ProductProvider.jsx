import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  addToCart,
  removeFromCart,
  clearCart,
} from "../../Redux/productSlice";

const ProductContext = createContext();

function ProductProvider({ children }) { 
  //✅ Default value to children
  const dispatch = useDispatch();
  const { data, cart, loading, error } = useSelector((state) => state.product);
  // const useProdutc = useSelector((state) => state.product);
  // console.log("PRODUCT DATA FROM REDUX",useProdutc);
  
  const [filteredProducts, setFilteredProducts] = useState(data || []); // Filtered products state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [bucketFiltering, setBucketFiltering] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);

  //  Fetch data from API
  useEffect(() => {
    console.log("useEffec Called");
    dispatch(fetchData());
    // fetchData();
  }, [dispatch]);

  // ✅ Jab bhi `data` update hoga, `setFilteredProducts(data)` call hoga
  useEffect(() => {
    // ✅ Jab bhi `data` update hoga, `setFilteredProducts(data)` call hoga
    // ✅ Yani `filteredProducts` automatically update ho jayega bina kisi manual trigger ke.
    setFilteredProducts(data);
  }, [data]); // ✅ Dependency array me `data` diya hai, iska matlab ye hai ki jab bhi `data` change hoga tabhi effect chalega.

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

        App: "product Fetching Data from Redux",
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => {
  return useContext(ProductContext);
};
export default ProductProvider;
