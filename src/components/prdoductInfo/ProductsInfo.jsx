import React from "react";
import { useProductContext } from "../Context API/ProductProvider";
useProductContext

function ProductsInfo() {
  const { data, setFilteredProducts, } = useProductContext();
  

  return (
    <div className="text-center text-yellow-500 text-2xl font-bold">
      <h1> Products Info </h1>
    </div>
  );
}

export default ProductsInfo;
