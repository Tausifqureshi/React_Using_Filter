// import React from "react";
// import { useProductContext } from "../../Context API/ProductProvider";

// function Price() {
//   const { setFilteredProducts, data, bucketFiltering, setBucketFiltering } =
//     useProductContext();

//   const priceRanges = [
//     { label: "All Prices", min: 0, max: Infinity },
//     { label: "Under ₹50", min: 0, max: 50 }, // ✅ Corrected max value
//     { label: "₹50 - ₹100", min: 50, max: 100 },
//     { label: "₹100 - ₹200", min: 100, max: 200 },
//     { label: "₹200 - ₹500", min: 200, max: 500 },
//     { label: "₹500 - ₹1000", min: 500, max: 1000 },
//     { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
//     { label: "₹5000 - ₹10000", min: 5000, max: 10000 },
//     { label: "Over ₹10000", min: 10000, max: Infinity },
//   ];

//   function handlePrice(e) {
//     console.log("Price");
//     const targetPriceValue = e.target.value;
//     const findValue = priceRanges.find(
//       (range) => range.label === targetPriceValue
//     );
//     if (!findValue) {
//       setFilteredProducts(data);
//       setBucketFiltering(null); // Optional: Reset bucketFiltering
//       return;
//     }

//     setBucketFiltering(findValue);
//     const filteredData = data.filter((item) => {
//       return item.price >= findValue.min && item.price <= findValue.max; // findValue use karo, targetPriceValue nahi
//     });
//     setFilteredProducts(filteredData);
//   }

//   return (
//     <div>
//       <h1>Price</h1>
//       {priceRanges.map((range, index) => (
//         <div key={index}>
//           <input
//             type="radio"
//             name="price"
//             id={range.label}
//             value={range.label} // Added this line to ensure correct value is passed
//             onChange={handlePrice}
//             checked={
//               bucketFiltering ? bucketFiltering.label === range.label : false
//             }
//           />
//           checked=
//           {bucketFiltering ? bucketFiltering.label === range.label : false}
//           {/* // Agar bucketFiltering exist karta hai (null ya undefined nahi hai)
//          // To check karega ki bucketFiltering.label ka value current range.label ke barabar hai ya nahi 
//           // Agar barabar hai to radio button checked (selected) hoga 
//           // Agar barabar nahi hai to radio button unchecked (deselect) rahega 
//           // Agar bucketFiltering null hai to default false return karega, taki error na aaye */}
//           <label htmlFor={range.label}>{range.label}</label>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Price;









import React from "react";
import useProductContext from "../context/productContext";

function Price() {
  const { data, bucketFiltering, setBucketFiltering, setFilteredProducts, } = useProductContext();

  return <div> Price </div>;
}

export default Price;
