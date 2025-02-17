import React from "react";
import { useProductContext } from "../../Context API/ProductProvider";


function PriceSlider() {
  const { setFilteredProducts, data, selectedPriceRange, setSelectedPriceRange } = useProductContext();

  const pricrChange = (value) => {
    const filtered = data.filter((product) => product.price >= selectedPriceRange);
    setFilteredProducts(filtered);
  };


  return <div>
    <h2>Price</h2>
    <input type="range" min="0" max="1000" value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)} />
    <p>Selected Price Range: {selectedPriceRange}</p>
    <button onClick={pricrChange}>Apply Filter</button>

  </div>;
}

export default PriceSlider;

// PriceSlider





