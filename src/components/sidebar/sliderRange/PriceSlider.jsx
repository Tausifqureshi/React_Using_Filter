import React from "react";
import { useProductContext } from "../../Context API/ProductProvider";

function PriceSlider() {
  const { setFilteredProducts, data, selectedPriceRange, setSelectedPriceRange } = useProductContext();

  function inputHandlerChange(e) {
    setSelectedPriceRange(Number(e.target.value)); // String value ko number me convert kar rahe hain
  }

  function priceChange() {
    const maxPrice = 1000;  // 🔽 Maximum price limit define ki gayi hai. Default maximum price
    // 🔽 Yeh filtering logic hai, jo sirf un products ko dikhayega jo selectedPriceRange ke andar aate hain
    const filterdRange = data.filter(
      (product) => product.price >= selectedPriceRange && product.price <= maxPrice
    );
    setFilteredProducts(filterdRange); // Filtered products ko update kar rahe hain
  }

  return (
    <div>
      <h2>Price</h2>
      <p className="my-2">Selected Price Range: {selectedPriceRange}</p>
      <input
        className="cursor-pointer"
        type="range"
        min="0"
        max="1000"
        value={selectedPriceRange}
        onChange={inputHandlerChange} // Slider move hone par value update hogi
      />
      <button
        onClick={priceChange}
        className="border-2 border-white rounded-full px-3 py-1 mx-3 hover:bg-white hover:text-black transition duration-300 ease-in-out hover:scale-110"
      >
        Go
      </button>
    </div>
  );
}

export default PriceSlider;
