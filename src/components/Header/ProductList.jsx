import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductList() {
  // console.log("ProductList Component Rendered");

  const { category } = useParams(); // URL se category get karega
  console.log("Category from URL:", category); // Check karega ki category sahi aa rahi hai
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // fetch(`https://dummyjson.com/products/category/${category}`)
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      // .then((data) => setProducts(data.products)) // dummay ke sath work karega ya.
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  return (
    <div className="h-full bg-yellow-200 p-2">
      <h2>Products in {category}</h2>
      <div className="flex flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <div
                className="cursor-pointer"
                onClick={() => navigate(`/productsInfo/${product.id}`)}
              >
                <img
                  // src={product.images?.[0]}
                  src={product.image}
                  alt={product.title}
                  width="250"
                />
              </div>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
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
