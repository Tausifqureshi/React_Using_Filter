// import React from "react";
// import { useProductContext } from "../../Context API/ProductProvider";

// const Price = () => {
//   console.log("Price Component Rendered");

//   // Context se product data aur filtering functions ko access kar rahe hain
//   const { setFilteredProducts, data, bucketFiltering, setBucketFiltering } =
//     useProductContext();

//   // Price ranges define kar rahe hain jise user select kar sakta hai
//   const priceRanges = [
//     { label: "All Prices", min: 0, max: Infinity },
//     { label: "Under ₹50", min: 0, max: 50 },
//     { label: "₹50 - ₹100", min: 50, max: 100 },
//     { label: "₹100 - ₹200", min: 100, max: 200 },
//     { label: "₹200 - ₹500", min: 200, max: 500 },
//     { label: "₹500 - ₹1000", min: 500, max: 1000 },
//     { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
//     { label: "Over ₹10000", min: 10000, max: Infinity },
//   ];

//   // Radio button select hone par call hone wala function
//   const handleSelection = (e) => {
//     // Radio button se select hua label value nikal rahe hain
//     const selectedLabel = e.target.value;
  
//     // priceRanges mein se uss value ko find kar rahe hai jo user na selectedLabel me diya hai. agar value match hoti hai  setBucketFiltering ke ander setBucketFiltering(selectedRange) value set kar dege.
//     const selectedRange = priceRanges.find(
//       (range) => range.label === selectedLabel
//     );

//     // Agar matching range nahi mili, to saare products dikhaye aur filtering reset karein
//     if (!selectedRange) {
//       setFilteredProducts(data);
//       setBucketFiltering(null);
//       return;
//     }

//     // UI update ke liye selectedrange ko state me set kar rahe hain
//     setBucketFiltering(selectedRange);

//     // Data ko filter kar rahe hain taaki keval selected price range ke products dikhen
//     const filteredProducts = data.filter(
//       (product) =>
//         product.price >= selectedRange.min && product.price <= selectedRange.max
//     );

//     // Filtered products ko update kar rahe hain
//     setFilteredProducts(filteredProducts);
//   };

//   return (
//     <div>
//       <h3>Price filter </h3>
//       {priceRanges.map((range, index) => (
//         <div key={index}>
//           <input
//             type="radio"
//             id={range.label}
//             name="price"
//             value={range.label}
//             onChange={handleSelection}
//             checked={
//               bucketFiltering ? bucketFiltering.label === range.label : false
//             }
//           />
//           {/*  Agar bucketFiltering exist karta hai (null ya undefined nahi hai)
//               To check karega ki bucketFiltering.label ka value current range.label ke barabar hai ya nahi
//             Agar barabar hai to radio button checked (selected) hoga
//             Agar barabar nahi hai to radio button unchecked (deselect) rahega
//            Agar bucketFiltering null hai to default false return karega, taki error na aaye */}

//           <label htmlFor={range.label}>{range.label}</label>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Price;



// Process completed successfully.
import React, { useMemo, useCallback } from "react";
import { useProductContext } from "../../Context API/ProductProvider";

const Price = React.memo(() => {
  // console.log("Price Component Rendered");

  const { setFilteredProducts, data, bucketFiltering, setBucketFiltering } = useProductContext();

  // Memoize the priceRanges array since it's constant
  const priceRanges = useMemo(() => [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under ₹50", min: 0, max: 50 },
    { label: "₹50 - ₹100", min: 50, max: 100 },
    { label: "₹100 - ₹200", min: 100, max: 200 },
    { label: "₹200 - ₹500", min: 200, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
    { label: "Over ₹10000", min: 10000, max: Infinity },
  ], []);

  // Memoize handleSelection so that its reference remains stable unless its dependencies change
  const handleSelection = useCallback((e) => {
    const selectedLabel = e.target.value;
    const selectedRange = priceRanges.find((range) => range.label === selectedLabel);

    if (!selectedRange) {
      setFilteredProducts(data);
      setBucketFiltering(null);
      return;
    }

    setBucketFiltering(selectedRange);

    const filteredProducts = data.filter(
      (product) =>
        product.price >= selectedRange.min && product.price <= selectedRange.max
    );

    setFilteredProducts(filteredProducts);
  }, [data, priceRanges, setFilteredProducts, setBucketFiltering]);

  return (
    <div>
      <h3>Price filter</h3>
      {priceRanges.map((range, index) => (
        <div key={index}>
          <input
            type="radio"
            id={range.label}
            name="price"
            value={range.label}
            onChange={handleSelection}
            checked={bucketFiltering ? bucketFiltering.label === range.label : false}
          />
          <label htmlFor={range.label}>{range.label}</label>
        </div>
      ))}
    </div>
  );
});

export default Price;



// Is me ham direct parameter ka use kar ke kar re hai matlab ham is me direct priceRange hi dere parameter me user se e.target.value se nhi le re hai, is liye hamne e.target.value ko use nahi kiya hai.
// import React from "react";
// import { useProductContext } from "../../Context API/ProductProvider";

// function Price() {
//   const { data, bucketFiltering, setBucketFiltering, setFilteredProducts } =
//     useProductContext();

//     const priceRanges = [
//       { label: "All Prices", min: 0, max: Infinity },
//       { label: "Under ₹500", min: 0, max: 500 },
//       { label: "₹500 - ₹1000", min: 500, max: 1000 },
//       { label: "₹1000 - ₹5000", min: 1000, max: 5000 },
//       { label: "₹5000 - ₹10000", min: 5000, max: 10000 },
//       { label: "Over ₹10000", min: 10000, max: Infinity }
//     ];
//   const handlePriceChange = (range) => {
//     console.log("Price range selected: ", range);
//     setBucketFiltering(range);
//     const filtered = data.filter((product) => {
//       return product.price >= range.min && product.price <= range.max;
//     });
//     setFilteredProducts(filtered);
//   };

//   return (
//     <div>
//       <h3>Price</h3>
//       {priceRanges.map((range) => (
//         <div key={range.label}>
//           <input
//             type="radio"
//             id={range.label}
//             name="price"
//             value={range.label}
//             // checked={bucketFiltering.price?.label === range.label}
//             checked={bucketFiltering?.label === range.label}
//             onChange={() => handlePriceChange(range)}
//           />
//           <label htmlFor={range.label}>{range.label}</label>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Price;
