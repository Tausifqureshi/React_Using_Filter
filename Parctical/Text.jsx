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















// Search.jsx
//useEfect ke sath aisa filtering kart hai.
  // useEffect(() => {
  //   // ✅ Step 1: Agar searchQuery empty ya sirf spaces hai, toh saare products dikhane chahiye.
  //   if (searchQuery.trim() === "") {  
  //     setFilteredProducts(data);  // 🔹 Search bar khali hai, toh saare products dikhaye.
  //     return;  // 🔹 `return` kar diya taaki neeche wala filter execute na ho.
  //   }
  
  //   // ✅ Step 2: Search Query empty nahi hai, toh filter lagana hai.
  //   const filterProduct = data.filter((product) => 
  //     product.title.toLowerCase().includes(searchQuery.toLowerCase())  
  //     // 🔹 `toLowerCase()` ka use kiya hai taaki case-insensitive search ho.
  //     // 🔹 searchQuery me jo value hai usko lowercase me convert karke check karo ki product.title me hai ya nahi
  //   );
  
  //   // ✅ Step 3: Filtered products ko state me update karo.
  //   setFilteredProducts(filterProduct);  
  
  // }, [data, searchQuery, setFilteredProducts]);  
//   // 🔹 Ye effect tab chalega jab `data`, `searchQuery`, ya `setFilteredProducts` change hoga.

function handleChange (e){
  // is me first data show agr search bar khali hai baad me filtering. dono me se jo hasn pade o kar sakte hai but real case me aisa hota hai ya jana zaruri hai.dono tara se kar sakte hai. indoono me first data show kar rehai.

  // const searchValue = e.target.value; // Jo value search bar pe change ho rahi hai, uska value millenge.
  // setSearchQuery(searchValue);

  // if(searchValue.trim()=== "") { // ✅ Step 1: Agar searchQuery empty ya sirf spaces hai, toh saare products dikhane chahiye.
  // setFilteredProducts(data);  // 🔹 Search bar khali hai, toh saare products dikhaye.
  // return // 🔹 `return` kar diya taaki neeche wala filter execute na ho.
  // }

  // ✅ Step 2: Search Query empty nahi hai, toh filter lagana hai.
  // const filterData = data.filter((item)=>item.title.toLowerCase().includes(searchValue));
  // 🔹 `toLowerCase()` ka use kiya hai taaki case-insensitive search ho.
  // 🔹 searchQuery me jo value hai usko lowercase me convert karke check karo ki product.title me hai ya nahi

  // ✅ Step 3: Filtered products ko state me update karo.
  // setFilteredProducts(filterData);

    
  //////////////////////////////
  const searchValue = e.target.value; 
  setSearchQuery(searchValue);
  // Agar searchQuery ka `trim()` empty string hai, iska matlab user ne kuch enter nahi kiya ya sirf spaces diye hain. Aise case me, hame saare products dikhane chahiye, isliye `data` ko directly set kar diya.
  const filterData = searchValue.trim() === ""
    ? data // ✅ Search bar khali hai, toh saare products dikhaye.
    : data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
     // 🔹 `toLowerCase()` ka use kiya hai taaki case-insensitive search ho.
    // 🔹 searchQuery me jo value hai usko lowercase me convert karke check karo ki product.title me hai ya nahi
    );
    console.log("Search Query:", searchValue);  // ✅ Search bar ka value sahi ara hai ya nahi
    console.log("Filtered Products:", filterData); // ✅ Filtered list sahi generate ho rahi hai ya nahi
    
  // ✅ Step 3: Filtered products ko state me update karo.
  setFilteredProducts(filterData);
  
   
}

// is me ham phele filter kar re baad me data show kar re 
// function handleChange(e){
//       // const searchValue = e.target.value;
//   // setSearchQuery(searchValue);
//   // const filterData = searchValue.trim().length > 0 ?
//   // data.filter((item) =>
//   //       item.title.toLowerCase().includes(searchValue.toLowerCase())
//   //     ) : data

//   //     setFilteredProducts(filterData)
  


//   const searchValue = e.target.value; // ✅ Spelling fix
//   setSearchQuery(searchValue);
  
//   if (searchValue.trim().length > 0) {
//     const filterData = data.filter((item) =>
//       item.title.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     setFilteredProducts(filterData); // ✅ Filtered data ko set karna zaroori hai
//   } else {
//     setFilteredProducts(data); // ✅ Agar search empty hai, toh saara data dikhao
//   }



// let searchValue = e.target.value; // Jo value search bar pe change ho rahi hai, uska value millenge.
// setSearchQuery(searchValue);
// if(searchValue.trim() !== ""){
//   const filterData = data.filter((item)=>{
//     return item.title.toLowerCase().includes(searchValue.toLowerCase())
//   })
//   setFilteredProducts(filterData)
// }
// else{
//   setFilteredProducts(data)
// }
// }