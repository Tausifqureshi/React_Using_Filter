// import React from "react";

// function ProductList() {
//   return <div>ProductList</div>;
// }

// export default ProductList;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductList() {
  const { category } = useParams(); // URL se category get karega
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error("Error fetching products:", error));
  }, [category]);

  return (
    <div className="h-full bg-yellow-200 p-2">
      <h2>Products in "{category}"</h2>
      <div className="flex flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <img src={product.thumbnail} alt={product.title} width="250" />
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
