import React, { useState } from "react";
import { useProductContext } from "../../Context API/ProductProvider";

function Price() {
  const { setFilteredProducts, data } = useProductContext();
  const [selectedRange, setSelectedRange] = useState([0, Infinity]); // Default: Show all

  const priceRanges = [
    { label: "All Prices", value: [0, Infinity] },
    { label: "₹0 - ₹500", value: [0, 500] },
    { label: "₹500 - ₹1000", value: [500, 1000] },
    { label: "₹1000+", value: [1000, Infinity] },
  ];

  const handlePriceFilter = (range) => {
    setSelectedRange(range);
    const filtered = data.filter(
      (item) => item.price >= range[0] && item.price <= range[1]
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h2>Filter by Price</h2>
      {priceRanges.map((range, index) => (
        <button
          key={index}
          onClick={() => handlePriceFilter(range.value)}
          style={{
            margin: "5px",
            padding: "8px 12px",
            cursor: "pointer",
            backgroundColor: selectedRange === range.value ? "blue" : "lightgray",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}

export default Price;
