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
    <>
      {products.map((items)=>(
        <Product key={items.id} {...items} />
      ))}
    </>
  );



  
  // return (
  //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //     {products.map((product) => (
  //       <div key={product.id} className="border p-4 rounded shadow">
  //         <img src={product.image} alt={product.title} className="w-full h-48 object-contain mix-blend-darken  "/>
  //         <h3 className="text-lg font-bold mt-2">{product.title.slice(0, 25)}</h3>
  //         <p className="text-gray-700">{product.price}</p>
  //         <button  className="bg-blue-500 text-white px-4 py-2  mt-2 rounded">
  //           Add to Cart
  //         </button>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Products;
