// src/components/products/Products.js
import React from "react";

const Products = () => {
  // Dummy product data
  const productList = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {productList.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-700">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
