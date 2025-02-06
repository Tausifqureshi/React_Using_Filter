// import React, { useState, useEffect } from "react";
// import { useProductContext } from "../Context API/ProductProvider";
// import ProductList from "./ProductList";

// function Header() {
//   const { setFilteredProducts, data } = useProductContext();
//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(""); // To store selected category
//   const [categories, setCategories] = useState([
//     "beauty",
//     "fragrances",
//     "furniture",
//     "groceries",
//   ]);

//   const filterProductsByCategory = (category) => {
//     setSelectedCategory(category);  // Update selected category
//     fetch('https://dummyjson.com/products')
//       .then(response => response.json())
//       .then(data => {
//         // Filter products by category
//         const filteredProducts = data.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
//         setFilteredProducts(filteredProducts);  // Set filtered products
//       })
//       .catch(error => console.error('Error fetching filtered products:', error));
//   };
// //   }, [selectedCategory]);


//   return (
//     <div>
//       <h1>Browse Products</h1>
//       {/* Category selection dropdown */}
//       <div>
//         <label>Select Category: </label>
//         <select
//           onChange={(e) => filterProductsByCategory(e.target.value)}
//           value={selectedCategory}
//         >
//           <option value="">All</option>
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default Header;




// dynamic  router

import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const categories = ["beauty", "fragrances", "furniture", "groceries"];

  const handleCategoryChange = (category) => {
    if (category) {
      navigate(`/productsList/${category}`);
    }
  };

  return (
    <div className="bg-green-500 p-4">
      <h1>Browse Products</h1>
      <label>Select Category: </label>
      <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Header;
