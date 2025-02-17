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
    <p className="my-2">Selected Price Range: {selectedPriceRange}</p>
    <input className="cursor-pointer" type="range" min="0" max="1000" value={selectedPriceRange} 
    onChange={(e) => setSelectedPriceRange (Number(e.target.value))} />
    <button onClick={pricrChange} className="border-2 border-white rounded-full px-3 py-1 mx-3 hover:bg-white hover:text-black transition duration-300 ease-in-out hover:scale-105"> Go </button>

  </div>;
}

export default PriceSlider;



