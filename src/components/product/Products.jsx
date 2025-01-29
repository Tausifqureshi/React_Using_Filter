import React, { useEffect } from "react";
import {fetchProduct } from "../../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
  
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-1">
      {products.map((items)=>(
        <Product key={items.id} {...items} />
      ))}
    </div>
  );



  
};

export default Products;




