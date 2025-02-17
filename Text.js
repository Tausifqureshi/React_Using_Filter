import React, { useState, useEffect } from "react";
import Input from "../../Input"; // Custom Input component
import { useProductContext } from "../../Context API/ProductProvider"; // Context API se data access kar rahe hain

function Category({ isSidebarOpen }) {
  // 1. selected categories store karne ke liye state
  const { data, setFilteredProducts } = useProductContext();  // Context API se products aur filteredProducts ka access
  const [selectedCategories, setSelectedCategories] = useState([]);  // initially empty array

  // 2. unique categories list banane ke liye
  const categories = [...new Set(data.map((item) => item.category))];  

  // 3. Jab user category select ya deselect karega toh yeh function chalega
  function handleChange(e) {
    const value = e.target.value; // jo category select hui uska value
    setSelectedCategories((prevSelectedCategories) => 
      prevSelectedCategories.includes(value)
        ? prevSelectedCategories.filter((c) => c !== value) // agar already select hai toh remove karo
        : [...prevSelectedCategories, value] // nahi hai toh add karo
    );

    // ❌ Yaha problem: state abhi turant update nahi hoti
    // Jab tum setSelectedCategories call karte ho, React state ko asynchronously update karta hai.
    // Matlab, state abhi turant change nahi hoti, balki thoda time lagta hai.
    // Agar tum yahi par selectedCategories ka use kar ke filter lagaoge toh wo purane state par chalega.
    console.log("Selected Categories after change:", selectedCategories);  
    // Yeh log dikhayega ki selectedCategories ka value turant update nahi hua
  }

  // 4. useEffect ka use kar rahe hain taaki selectedCategories update hone ke baad filter lage
  useEffect(() => {
    // ✅ Yeh solution hai: useEffect tabhi chalega jab selectedCategories update ho jayega
    // Iska matlab hai ki yaha hamesha naya updated selectedCategories milega

    if (selectedCategories.length > 0) {
      // 5. Agar koi category select hui hai toh filter lagao
      const filteredProducts = data.filter((product) =>
        selectedCategories.includes(product.category)  // product category check kar rahe hain
      );
      setFilteredProducts(filteredProducts);  // Filtered list set karo
    } else {
      // 6. Agar koi category select nahi hui toh sabhi products dikhao
      setFilteredProducts(data);
    }
  }, [selectedCategories, data, setFilteredProducts]);  
  // Yeh effect sirf tab chalega jab selectedCategories ya data change hoga

  return (
    <div className="flex flex-col">
      <h3>Filter by Category:</h3>
      {/* 7. Har category ke liye ek Input component dikhayenge */}
      {categories.map((category) => (
        <Input
          key={category}
          value={category}
          isSidebarOpen={isSidebarOpen}
          handleChange={handleChange}  // handleChange function pass kar rahe hain
        />
      ))}
    </div>
  );
}

// export default Category;


















// Price  filter range code
import React from "react";
import { useProductContext } from "../../Context API/ProductProvider";


function Price() {
  const { setFilteredProducts, data, selectedPriceRange, setSelectedPriceRange } = useProductContext();

  const pricrChange = () => {
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

// export default Price;















import React from "react";
import { useProductContext } from "../../Context API/ProductProvider";


function PriceSlider() {
  const { setFilteredProducts, data, selectedPriceRange, setSelectedPriceRange } = useProductContext();

  const pricrChange = () => {
    const maxPrice = 10000; // Default maximum price
    const filtered = data.filter(
      (product) => product.price >= selectedPriceRange && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };
  

  return <div>
    <h2>Price</h2>
    <p className="my-2">Selected Price Range: {selectedPriceRange}</p>
    <input className="cursor-pointer" type="range" min="0" max="10000" value={selectedPriceRange} 
    onChange={(e) => setSelectedPriceRange (Number(e.target.value))} />
    <button onClick={pricrChange} className="border-2 border-white rounded-full px-3 py-1 mx-3 hover:bg-white hover:text-black transition duration-300 ease-in-out hover:scale-110"> Go </button>

  </div>;
}

export default PriceSlider;











