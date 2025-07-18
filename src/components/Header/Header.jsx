import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  // console.log("Header Component Rendered");
  
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category
  // const categories = ["beauty", "fragrances", "furniture", "groceries"];
  const categories = ["men's clothing","jewelery","electronics","women's clothing"]

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    console.log("Selected Category:", category); // Check karega ki category sahi aa rahi hai
    setSelectedCategory(category); // State update ho rahi hai
    if (category) {
      navigate(`/productsList/${category}`);
      console.log("Navigating to:", `/productsList/${category}`); // Check karega ki navigate sahi ho raha hai
    }
  };      
       
  return (
    <div className="bg-green-500 p-4 text-white">
      <h2 className="mb-2 text-lg font-bold">
        Selected Category: {selectedCategory || "None"}
      </h2>
      <label>Select Category: </label>
      <select   
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="text-black"
      >
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
