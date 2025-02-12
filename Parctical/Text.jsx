import React, { useState } from "react";
import { useProductContext } from "../../Context API/ProductProvider";

const Price = () => {
  const { setFilteredProducts, data } = useProductContext(); // Context se data aur filteredProducts ko access kar rahe hain
  const [selectedRange, setSelectedRange] = useState(null); // selectedRange ko state mein store kar rahe hain

  // Price ranges define kar rahe hain
  const priceRanges = [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under ₹500", min: 0, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
    { label: "₹5000 - ₹10000", min: 5000, max: 10000 },
    { label: "Over ₹10000", min: 10000, max: Infinity }
  ];

  // Handle selection function
  function handleSelection(e) {
    // 1. Target value ko get kar rahe hain jo radio button se select kiya gaya tha
    const targetValue = e.target.value;
    
    // 2. `priceRanges` mein se uss value ko find kar rahe hai jo user na Targetvalue me diya hai. agar value match hoti hai setSelectFunction ke ander setSelectedRange(selectedRange); value set kar dege.
    const selectedRange = priceRanges.find(range => range.label === targetValue);
    
    // 3. Agar selectedRange undefined hai, matlab koi range match nahi hui
    if (!selectedRange) {
      console.log("Function return ho gaya! ❌"); // Range nahi mili toh message print
    } else {
      console.log("Filter apply hoga! ✅"); // Agar range mil gayi toh filter apply ho jayega
    }

    // 4.`selectedRange` ko state mein set karna, taaki UI update ho sake
    setSelectedRange(selectedRange);

    // 5.`data` array ko filter karna, taaki products jo selected range ke min aur max price ke andar hain, wo hi display ho
    const filtered = data.filter(product => {
      // Product price ko compare kar rahe hain with selected range min and max
      return product.price >= selectedRange.min && product.price <= selectedRange.max;
    });

    // 6. Filtered products ko set kar rahe hain
    setFilteredProducts(filtered);
  }

  return (
    <div>
      <h3>Filter by Price</h3>
      {/* Price ranges ko map kar rahe hain aur radio buttons display kar rahe hain */}
      {priceRanges.map((range, index) => (
        <div key={index}>
          <input
            type="radio"
            id={range.label}
            name="price"
            value={range.label} // Radio button value ko set kar rahe hain
            checked={selectedRange ? selectedRange.label === range.label : false} 
            onChange={handleSelection} // Radio button ke selection par handleSelection function call kar rahe hain
          />
          <label htmlFor={range.label}>{range.label}</label> {/* Radio button ka label dikhana */}
        </div>
      ))}
    </div>
  );
};

export default Price;




// import React, { useState } from "react";
// import { useProductContext } from "../../Context API/ProductProvider";

// const Price = () => {
//   const { setFilteredProducts, data } = useProductContext();
//   const [selectedRange, setSelectedRange] = useState(null);

//   const priceRanges = [
//     { label: "Under ₹500", min: 0, max: 500 },
//     { label: "₹500 - ₹1000", min: 500, max: 1000 },
//     { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
//     { label: "₹5000 - ₹10000", min: 5000, max: 10000 },
//     { label: "Over ₹10000", min: 10000, max: Infinity }
//   ];

//   const handleSelection = (range) => {
//     setSelectedRange(range); // Update selected range
    
//     // ✅ Directly update filtered products
//     const filtered = data.filter(product => 
//       product.price >= range.min && product.price <= range.max
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <div>
//       <h3>Filter by Price</h3>
//       {priceRanges.map((range, index) => (
//         <div key={index}>
//           <input
//             type="radio"
//             id={range.label}
//             name="price"
//             value={range.label}
//             checked={selectedRange?.label === range.label} // Compare label for checking
//             onChange={() => handleSelection(range)} // Update selection
//           />
//           <label htmlFor={range.label}>{range.label}</label>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Price;







// Category.js
// import React, { useEffect, useState } from "react";
// import Input from "../../Input";
// import { useProductContext } from "../../Context API/ProductProvider";

// function Category({ isSidebarOpen }) {
//   const {
//     data,
//     setFilteredProducts,
//     selectedCategories,
//     setSelectedCategories,
//   } = useProductContext();

  
//   const categories = [... new Set(data.map((item) => item.category))]; // ✅ Unique categories array
  

//  function handleChange(e) {
//   // const value = e.target.value; // Jo category select ya deselect ho rahi hai, uska value millenge.
//   // selectedCategories.includes(value) // agar category pehle se selected hai, toh usko remove karte hain
//   //   ? setSelectedCategories((prevSelectedCategories) =>
//   //       prevSelectedCategories.filter((c) => c !== value)// agar category pehle se selected hai, toh usko remove karte hain
//   //     )
//   //   : setSelectedCategories((prevSelectedCategories) => [ // agar category select nahi ki gayi, toh usko add karte hain
//   //       ...prevSelectedCategories,
//   //       value,
//   //     ]);

  
//   const value = e.target.value; // Jo category select ya deselect ho rahi hai, uska value millenge.
//   if (selectedCategories.includes(value)) {
//     setSelectedCategories((prevSelectedCategories) =>
//       prevSelectedCategories.filter((c) => c !== value) // agar category pehle se selected hai, toh usko remove karte hain
//     );
//   } else {
//     setSelectedCategories((prevSelectedCategories) => [
//       ...prevSelectedCategories, // agar category select nahi ki gayi, toh usko add karte hain
//       value,
//     ]);
//   }


// // 2. is me phele value lene bol re hai.
// //  if(!selectedCategories.includes(value)){
// //   setSelectedCategories((prevSelectedCategories) => [
// //     ...prevSelectedCategories,  // Pura previous selectedCategories ko leke, naye category ko add karte hain
// //     value,
// //   ]);
// //  }else{
// //   setSelectedCategories((prevSelectedCategories) => prevSelectedCategories.filter((c) => c !== value));

// //  }

// // const valueSelected = e.target.value; // Jo category select ya deselect ho rahi hai, uska value
// // setSelectedCategories((prevSelectedCategories) => 
// //   !prevSelectedCategories.includes(valueSelected)
// //     ? [...prevSelectedCategories, valueSelected] // Agar category select nahi hai, toh add karo
// //     : prevSelectedCategories.filter((c) => c !== valueSelected) // Agar already selected hai, toh remove karo
// // );



// }

// useEffect(()=>{
//   // 1. agar selectedCategories empty nahi hai toh uska matlab user ne kuch select kiya hai.
//   // if (selectedCategories.length > 0) {
//   //   const filteredProducts = data.filter((product) =>
//   //     selectedCategories.includes(product.category)
//   //   );
//   //   setFilteredProducts(filteredProducts);
//   // } else {
//   //   setFilteredProducts(data); // Show all products if no category selected
//   // }

//     //  const filteredProducts = selectedCategories.length > 0
//     //   ? data.filter((product) => selectedCategories.includes(product.category))
//     //   : data;
//     // setFilteredProducts(filteredProducts);


//     // 2. First Data Render agar selectedCategories empty hai toh uska matlab user ne kuch select nahi kiya ya sirf spaces diye hain. Aise case me, hame saare products dikhane chahiye, isliye `data` ko directly set kar diya.
//     const filteredProducts = selectedCategories.length === 0
//     ? data
//     : data.filter((product) => selectedCategories.includes(product.category));
//     setFilteredProducts(filteredProducts);


//     // if(selectedCategories.length === 0){
//     //   setFilteredProducts(data);
//     // }
//     // else{
//     //   const filteredProducts = data.filter((product) => selectedCategories.includes(product.category));
//     //   setFilteredProducts(filteredProducts);
//     // }


// }, [data, selectedCategories, setFilteredProducts])


//   return (
//     <div className="flex flex-col">
//       <h3>Filter by Category:</h3>
//       {categories.map((category) => (
//         <Input
//           key={category}
//           value={category}
//           isSidebarOpen={isSidebarOpen}
//           checked={selectedCategories.includes(category)} // ✅ Checkbox ka control state ke haath me
//           handleChange={handleChange}
//         />
//       ))}
//     </div>
//   );
// }

// export default Category;
















