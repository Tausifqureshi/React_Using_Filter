// import React, { useState } from "react";
// import { useProductContext } from "../../Context API/ProductProvider";

// const Price = () => {
//   const { setFilteredProducts, data } = useProductContext(); // Context se data aur filteredProducts ko access kar rahe hain
//   const [selectedRange, setSelectedRange] = useState(null); // selectedRange ko state mein store kar rahe hain

//   // Price ranges define kar rahe hain
//   const priceRanges = [
//     { label: "Under ₹500", min: 0, max: 500 },
//     { label: "₹500 - ₹1000", min: 500, max: 1000 },
//     { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
//     { label: "₹5000 - ₹10000", min: 5000, max: 10000 },
//     { label: "Over ₹10000", min: 10000, max: Infinity }
//   ];

//   // Handle selection function
//   function handleSelection(e) {
//     // 1. Target value ko get kar rahe hain jo radio button se select kiya gaya tha
//     const targetValue = e.target.value;
    
//     // 2. `priceRanges` mein se uss value ko find kar rahe hai jo user na Targetvalue me diya hai. agar value match hoti hai setSelectFunction ke ander setSelectedRange(selectedRange); value set kar dege.
//     const selectedRange = priceRanges.find(range => range.label === targetValue);
    
//     // 3. Agar selectedRange undefined hai, matlab koi range match nahi hui
//     if (!selectedRange) {
//       console.log("Function return ho gaya! ❌");
//       setFilteredProducts(data); // Reset filtered products
//       return;
//     } 

//     // 4.`selectedRange` ko state mein set karna, taaki UI update ho sake
//     setSelectedRange(selectedRange);

//     // 5.`data` array ko filter karna, taaki products jo selected range ke min aur max price ke andar hain, wo hi display ho
//     const filtered = data.filter(product => {
//       // Product price ko compare kar rahe hain with selected range min and max
//       return product.price >= selectedRange.min && product.price <= selectedRange.max;
//     });

//     // 6. Filtered products ko set kar rahe hain
//     setFilteredProducts(filtered);
//   }

//   return (
//     <div>
//       <h3>Filter by Price</h3>
//       {/* Price ranges ko map kar rahe hain aur radio buttons display kar rahe hain */}
//       {priceRanges.map((range, index) => (
//         <div key={index}>
//           <input
//             type="radio"
//             id={range.label}
//             name="price"
//             value={range.label} // Radio button value ko set kar rahe hain
//             checked={selectedRange ? selectedRange.label === range.label : false} 
//             aria-labelledby={`label-${range.label}`} // Accessibility improvement
//             onChange={handleSelection} // Radio button ke selection par handleSelection function call kar rahe hain
//           />
//           <label htmlFor={range.label}>{range.label}</label> {/* Radio button ka label dikhana */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Price;







import React, { useState, useMemo, useEffect } from "react";
import { useProductContext } from "../../Context API/ProductProvider";

const Price = () => {
  const { setFilteredProducts, data } = useProductContext();
  const [selectedRange, setSelectedRange] = useState(null);

  const priceRanges = [
    { label: "Under ₹500", min: 0, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
    { label: "₹5000 - ₹10000", min: 5000, max: 10000 },
    { label: "Over ₹10000", min: 10000, max: Infinity }
  ];

  // useMemo to optimize filtering performance
  const filteredProducts = useMemo(() => {
    if (!selectedRange) return data;
    return data.filter(product => 
      product.price >= selectedRange.min && product.price <= selectedRange.max
    );
  }, [selectedRange, data]);

  // Effect to update filtered products
  useEffect(() => {
    setFilteredProducts(filteredProducts);
  }, [filteredProducts, setFilteredProducts]);

  return (
    <div>
      <h3>Filter by Price</h3>

      {/* "All Prices" ka option */}
      <div>
        <input
          type="radio"
          id="all-prices"
          name="price"
          value="All Prices"
          checked={!selectedRange}
          onChange={() => setSelectedRange(null)}
        />
        <label htmlFor="all-prices"> All Prices</label>
      </div>
      {priceRanges.map((range, index) => (
        <div key={index}>
          <input
            type="radio"
            id={range.label}
            name="price"
            value={range.label}
            checked={selectedRange?.label === range.label}
            onChange={() => setSelectedRange(range)}
          />
          <label htmlFor={range.label}>{range.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Price;
