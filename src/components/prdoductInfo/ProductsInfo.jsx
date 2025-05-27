// Process completed successfully.
import React from "react";
import { useProductContext } from "../Context API/ProductProvider";
import { useParams } from "react-router-dom";

function ProductsInfo() {
  console.log("ProductsInfo Component Rendered");
  
  const { data, loading } = useProductContext();
  const { id } = useParams();

  if (loading) {
    return (
      <h1 className="text-center text-blue-500">Fetching product details...</h1>
    );
  }

  if (!data || data.length === 0) {
    return <h1 className="text-center text-red-500">Data is not available!</h1>;
  } 

  const product = data.find((product) => product.id === Number(id));

  if (!product) {
    return <h1 className="text-center text-red-500">Product not found!</h1>;
  }

  return (
    <div className="text-center text-yellow-500 text-2xl font-bold">
      <h1>Product Info</h1>
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="mx-auto my-4 w-64 h-64 object-cover"
      />
      <h2 className="text-xl">{product.title}</h2>
      <h2 className="text-lg text-green-500 font-semibold">${product.price}</h2>
      <p className="text-gray-700 text-base">{product.description}</p>
      <h2 className="text-sm text-blue-500">Category: {product.category}</h2>
    </div>
  );
}

export default ProductsInfo;
