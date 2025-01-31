import React, { useEffect } from "react";
import {fetchData } from "../../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useProductContext } from '../Context API/ProductProvider';

  
const Products = () => {
  const dispatch = useDispatch();
  // const fetched_Products_Data = useSelector((state) => state.product.data);  
  const { data, loading, error, addToCart } = useProductContext(); // Use context to get data, loading, error, and addToCart

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-1">
      {data.map((items)=>(
        <Product key={items.id} {...items} />
      ))}
    </div>
  );



  
};

export default Products;




