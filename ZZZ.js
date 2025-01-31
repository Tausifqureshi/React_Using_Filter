import React from "react";
import { useProductContext } from "./ProductContext";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import SearchBar component

const ProductList = () => {
  const { filteredProducts, loading, error, addToCart } = useProductContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Product List</h1>

      {/* Search Bar Component */}
      <SearchBar />

      {/* Product List */}
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <Link to={`/cart`}>Go to Cart</Link>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
