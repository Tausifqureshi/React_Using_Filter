import React, {createContext, useContext, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData} from '../../Redux/productSlice';

const ProductContext = createContext();


function ProductProvider( {children}) {
  const dispatch = useDispatch();
  const { data, cart, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
 <ProductContext.Provider value={{
   data: data,
   cart: cart,
   loading: loading,
   jerror: error,

 }}>
    {children}
 </ProductContext.Provider>

);
}

export const useProductContext = () => useContext(ProductContext);
export default ProductProvider;
 