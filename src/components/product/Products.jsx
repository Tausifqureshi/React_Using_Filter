import React from "react";
import Product from "./Product";
import { useProductContext } from "../Context API/ProductProvider";

const Products = () => {
  const { loading, error, filteredProducts, handleAddToCart, cart } =
    useProductContext(); // Use context to get data, loading, error,

  if (loading) return <div> Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-2 ">
      {/* {filteredProducts.length > 0 ? ( // Agar filteredProducts ka length 0 se zyada hai (> 0), toh iska matlab hai kuch products available hain, aur unko show karna hai.
          filteredProducts.map((product) => ( 
            <Product key={product.id} {...product} /> // filteredProducts me jo bhi products hain unko show karna hai.
          ))
        ) : (
          <p>No products found</p> // Agar filteredProducts ka length 0 hai, toh koi product nahi mila, isliye "No products found" show karna hai.
        )} */}

      {/* is tara se bhi likh sakte ho */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => {
          return (
            <Product
              key={item.id}
              {...item}
              handleAddToCart={handleAddToCart}
              cart={cart}
            />
          );
        })
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Products;
