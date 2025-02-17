
import React from "react";
import { useProductContext } from "../../Context API/ProductProvider";


function PriceSlider() {
  const { setFilteredProducts, data, selectedPriceRange, setSelectedPriceRange } = useProductContext();

  function inputHandlerChange(e){
    setSelectedPriceRange (Number(e.target.value));
  }

 function priceChange(){
  console.log("appiy");
  const maxPrice = 1000;
  const filterdRange = data.filter((product)=> product.price >= selectedPriceRange && product.price <= maxPrice);
  setFilteredProducts(filterdRange);
 
 }
  
  return (
   <div>
    <h2>Price</h2>
    <p className="my-2">Selected Price Range: {selectedPriceRange}</p>
    <input className="cursor-pointer" type="range" min="0" max="1000" value={selectedPriceRange} 
    onChange={inputHandlerChange}
    />
   <button onClick={priceChange} className="border-2 border-white rounded-full px-3 py-1 mx-3 hover:bg-white hover:text-black transition duration-300 ease-in-out hover:scale-110"> Go </button>

   </div>
  );
}

export default PriceSlider;



