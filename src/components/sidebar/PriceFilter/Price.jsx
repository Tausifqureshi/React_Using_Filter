import React from "react";
import { useProductContext } from "../../Context API/ProductProvider";

function Price() {
  const {
    setFilteredProducts,
    data,
    selectedPriceRange,
    setSelectedPriceRange,
  } = useProductContext();
  const handlePriceChange = (event) => {
    const price = Number(event.target.value);
    setSelectedPriceRange(price);
    const filtered = data.filter((product) => product.price <= price);
    setFilteredProducts(filtered);
  };
  

  const priceRanges = [
    { label: "All", value: 10000 },
    { label: "Under $100", value: 100 },
    { label: "$100 - $200", value: 200 }, 
    { label: "$200 - $300", value: 300 },
    { label: "$300 - $400", value: 400 },
    { label: "$400 - $500", value: 500 },
    { label: "$500 - $600", value: 600 },
    { label: "$600 - $700", value: 700 },
    { label: "$700 - $800", value: 800 },
    { label: "$800 - $900", value: 900 },
    
  ];


  return (
    <div>
      <h1>Price</h1>
      {priceRanges.map((range) => (
        <div key={range.value}>
          <input type="radio" id={range.label} value={range.value} onChange={handlePriceChange} 
          checked={selectedPriceRange === range.value} />
          <label htmlFor={range.label}>{range.label}</label>
        </div>
      ))}

    </div>
  );
}

export default Price;
