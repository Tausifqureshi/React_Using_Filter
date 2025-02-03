import React, { createContext, useContext, useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  addToCart,
  removeFromCart,
  clearCart,
} from "../../Redux/productSlice";

const ProductContext = createContext();

function ProductProvider({ children }) { //✅ Default value to children
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products state
  const dispatch = useDispatch();

  const { data, cart, loading, error } = useSelector((state) => state.product);
  const useProdutc = useSelector((state) => state.product);
  // console.log("PRODUCT DATA FROM REDUX",useProdutc);

  useEffect(() => {
    console.log("useEffec Called");
    dispatch(fetchData());
    // fetchData();

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
        filteredProducts,
        setFilteredProducts,
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

