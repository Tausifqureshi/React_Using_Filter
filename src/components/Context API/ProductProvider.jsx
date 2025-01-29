import React, {createContext, useContext, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, addToCart, removeFromCart, clearCart } from '../../Redux/productSlice';

const ProductContext = createContext();


function ProductProvider( {children}) {
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
}

const handleClearCart = () => {
  dispatch(clearCart());
}




  return (
 <ProductContext.Provider value={{
   data: data,
   cart: cart,
   loading: loading,
   error: error,
    handleAddToCart: handleAddToCart,
    handleRemoveFromCart: handleRemoveFromCart,
    handleClearCart: handleClearCart,
    

 }}>
    {children}
 </ProductContext.Provider>

);
}

export const useProductContext = () => useContext(ProductContext);
export default ProductProvider;
 