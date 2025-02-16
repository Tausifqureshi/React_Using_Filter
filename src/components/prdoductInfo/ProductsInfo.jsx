import React from "react";
import { useProductContext } from "../Context API/ProductProvider";
import { useParams } from "react-router-dom";

function ProductsInfo() {
  const { data,} = useProductContext();
  console.log("Data", data);
  const { id } = useParams();

  const product = data.find((product) => product.id === Number(id));
  console.log("Product", product);
  
  
  return (
    <div className="text-center text-yellow-500 text-2xl font-bold">
      <h1> Products Info </h1>
      {/* <img src={product?.images} alt={product?.title} /> */}
      <img src={product?.images?.[0]} alt={product?.title} />

      <h2> {product?.title} </h2>
      <h2> {product?.price} </h2>
      <h2> {product?.description} </h2>
      <h2> {product?.category} </h2>
  
     
    </div>
  );
}

export default ProductsInfo;
