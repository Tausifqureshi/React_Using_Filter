import React, { useState, useEffect } from "react";
import Input from "../../Input"; // Custom Input component
import { useProductContext } from "../../Context API/ProductProvider"; // Context API for accessing product data

function Category({ isSidebarOpen }) {
  // 1. useState hook - To store the selected categories
  const { data, setFilteredProducts } = useProductContext();  // Context se products aur setFilteredProducts ko access kar rahe hain
  const [selectedCategories, setSelectedCategories] = useState([]);  // Initial state for selected categories, starts as empty array

  // 2. Extracting unique categories from the product data
  const categories = [...new Set(data.map((item) => item.category))];  // Creating a list of unique categories

  // 3. handleChange function - When user selects/deselects a category
  function handleChange(e) {
    const value = e.target.value; // The selected category value
    setSelectedCategories((prevSelectedCategories) => 
      prevSelectedCategories.includes(value)
        ? prevSelectedCategories.filter((c) => c !== value) // If already selected, remove it
        : [...prevSelectedCategories, value] // If not selected, add it
    );

    // 🛑 Problem:
    // Tumhare handleChange ke andar jo filter laga rahe ho wo **selectedCategories ke purane value** par ho raha hai.
    // Jab tum **setSelectedCategories** call karte ho, state turant update nahi hoti.
    // Matlab, **`selectedCategories`** state abhi update nahi hui hai aur tum purani state ko use kar rahe ho filter ke liye.
    // React ka **`setState`** function asynchronous hota hai, isliye state turant update nahi hoti.
    console.log("Selected Categories after change:", selectedCategories);  // Debugging log to check the old (not updated) value of selectedCategories
  }

  // 4. useEffect hook - Handles filtering logic when selectedCategories changes
  useEffect(() => {
    // ✅ Solution:
    // `useEffect` is used here because it runs **after** `selectedCategories` state has been updated.
    // `useEffect` ko yaha use kar rahe hain taaki **state ka updated value** mil sake filter apply karte waqt.

    // Now, selectedCategories will have the updated value after state change.
    if (selectedCategories.length > 0) {
      // 5. Filter products based on selected categories if any are selected
      const filteredProducts = data.filter((product) =>
        selectedCategories.includes(product.category)  // Check if product's category is in selectedCategories
      );
      setFilteredProducts(filteredProducts);  // Setting the filtered products to be displayed
    } else {
      // 6. If no categories are selected, show all products
      setFilteredProducts(data);  // Display all products if no category is selected
    }
  }, [selectedCategories, data, setFilteredProducts]);  // Dependency array - This effect runs when selectedCategories or data changes

  return (
    <div className="flex flex-col">
      <h3>Filter by Category:</h3>
      {/* 7. Rendering Input components for each category */}
      {categories.map((category) => (
        <Input
          key={category}
          value={category}
          isSidebarOpen={isSidebarOpen}
          handleChange={handleChange}  // Passing handleChange to update selected categories
        />
      ))}
    </div>
  );
}

export default Category;
