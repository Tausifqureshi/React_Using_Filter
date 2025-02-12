



import React, { useState, useEffect } from "react";
import { useProductContext } from "../../Context API/ProductProvider";

const Price = () => {
  const { setFilteredProducts, data } = useProductContext(); // Context se data ko access kar rahe hain
  const [selectedRange, setSelectedRange] = useState(null); // selectedRange ko state mein store kar rahe hain

  // Price ranges ko define kar rahe hain
  const priceRanges = [
    { label: "₹0-100", min: 0, max: 100 },
    { label: "₹100-200", min: 100, max: 200 },
    { label: "₹200-300", min: 200, max: 300 },
    { label: "₹300-400", min: 300, max: 400 },
    { label: "₹400-500", min: 400, max: 500 },
    { label: "₹500-600", min: 500, max: 600 },
    { label: "₹600-700", min: 600, max: 700 },
    { label: "₹700-800", min: 700, max: 800 },
    { label: "₹800-900", min: 800, max: 900 },
    { label: "₹900-1000", min: 900, max: 1000 },
    { label: "₹1000-1100", min: 1000, max: 1100 }
  ];

  // Handle selection function
  function handleSelection(e) {
    const targetValue = e.target.value; // Selected price range value
    const selectedRange = priceRanges.find((range) => range.label === targetValue); // Find corresponding range object
    
    if (!selectedRange) {
      console.log("Function return ho gaya! ❌");
    } else {
      console.log("Filter apply hoga! ✅");
    }

    // Set selected range in state
    setSelectedRange(selectedRange);

    // Filter products based on selected range
    const filteredProducts = data.filter((product) => 
      product.price >= selectedRange.min && product.price <= selectedRange.max
    );

    // Set filtered products
    setFilteredProducts(filteredProducts);
  }

  return (
    <div>
      <h3>Filter by Price</h3>
      {priceRanges.map((range) => (
        <div key={range.label}>
          <input
            type="radio"
            value={range.label}
            id={range.label}
            onChange={handleSelection}
            checked={selectedRange?.label === range.label}
          />
          <label htmlFor={range.label}>{range.label}</label>
        </div>
      ))}
    </div>
    
    



  );
};

export default Price;

