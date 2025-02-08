
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
