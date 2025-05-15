// import React, { useEffect } from "react";
// import { useProductContext } from "../../Context API/ProductProvider";
// import Input from "../../Input";

// function Category({ isSidebarOpen }) {
//   console.log("Category Component Rendered");

//   const {
//     data,
//     setFilteredProducts,
//     selectedCategories,
//     setSelectedCategories,
//   } = useProductContext();

//   const categories = [...new Set(data.map((item) => item.category))]; // ✅ Unique categories array

//   // jab user checkbox ko select ya deselect karega toh yeh function chalega
//   function handleCheckbox(e) {
//     // const value = e.target.value; // Jo category select ya deselect ho rahi hai, uska value millenge.
//     // selectedCategories.includes(value) // agar category pehle se selected hai, toh usko remove karte hain
//     //   ? setSelectedCategories((prevSelectedCategories) =>
//     //       prevSelectedCategories.filter((c) => c !== value)// agar category pehle se selected hai, toh usko remove karte hain
//     //     )
//     //   : setSelectedCategories((prevSelectedCategories) => [ // agar category select nahi ki gayi, toh usko add karte hain
//     //       ...prevSelectedCategories,
//     //       value,
//     //     ]);

//     const value = e.target.value; // Jo category select ya deselect ho rahi hai, uska value millenge.
//     if (selectedCategories.includes(value)) {
//       setSelectedCategories(
//         (prevSelectedCategories) =>
//           prevSelectedCategories.filter((c) => c !== value) // agar category pehle se selected hai, toh usko remove karte hain
//       );
//     } else {
//       setSelectedCategories((prevSelectedCategories) => [
//         ...prevSelectedCategories, // agar category select nahi ki gayi, toh usko add karte hain
//         value,
//       ]);
//     }

//     // 2. is me phele value lene bol re hai.
//     //  if(!selectedCategories.includes(value)){
//     //   setSelectedCategories((prevSelectedCategories) => [
//     //     ...prevSelectedCategories,  // Pura previous selectedCategories ko leke, naye category ko add karte hain
//     //     value,
//     //   ]);
//     //  }else{
//     //   setSelectedCategories((prevSelectedCategories) => prevSelectedCategories.filter((c) => c !== value));

//     //  }

//     // const valueSelected = e.target.value; // Jo category select ya deselect ho rahi hai, uska value
//     // setSelectedCategories((prevSelectedCategories) =>
//     //   !prevSelectedCategories.includes(valueSelected)
//     //     ? [...prevSelectedCategories, valueSelected] // Agar category select nahi hai, toh add karo
//     //     : prevSelectedCategories.filter((c) => c !== valueSelected) // Agar already selected hai, toh remove karo
//     // );
//   } 

//   useEffect(() => {
//     // 1. agar selectedCategories empty nahi hai toh uska matlab user ne kuch select kiya hai.
//     // if (selectedCategories.length > 0) {
//     //   const filteredProducts = data.filter((product) =>
//     //     selectedCategories.includes(product.category)
//     //   );
//     //   setFilteredProducts(filteredProducts);
//     // } else {
//     //   setFilteredProducts(data); // Show all products if no category selected
//     // }

//     //  const filteredProducts = selectedCategories.length > 0
//     //   ? data.filter((product) => selectedCategories.includes(product.category))
//     //   : data;
//     // setFilteredProducts(filteredProducts);

//     // 2. First Data Render agar selectedCategories empty hai toh uska matlab user ne kuch select nahi kiya ya sirf spaces diye hain. Aise case me, hame saare products dikhane chahiye, isliye `data` ko directly set kar diya.
//     const filteredProducts =
//       selectedCategories.length === 0
//         ? data
//         : data.filter((product) =>
//             selectedCategories.includes(product.category)
//           );
//     setFilteredProducts(filteredProducts);

//     // if(selectedCategories.length === 0){
//     //   setFilteredProducts(data);
//     // }
//     // else{
//     //   const filteredProducts = data.filter((product) => selectedCategories.includes(product.category));
//     //   setFilteredProducts(filteredProducts);
//     // }
//   }, [data, selectedCategories, setFilteredProducts]);

//   // Remove Functionality for Category
//   function handleTagRemove(category) {
//     setSelectedCategories((prev) => prev.filter((c) => c !== category));
//   }

//   return (
//     <div className="flex flex-col gap-3">
//       <h1>Category</h1>

//       {categories.map((category) => (
//         <Input
//           key={category}
//           value={category}
//           handleChange={handleCheckbox} // Temporary test ke liye
//           isSidebarOpen={isSidebarOpen}
//           checked={selectedCategories.includes(category)}
//         />
//       ))}

//       {selectedCategories.length > 0 && (
//         <div className="flex flex-wrap mt-2">
//           {selectedCategories.map((category) => (
//             <span
//               key={category}
//               onClick={() => handleTagRemove(category)}
//               className="px-2 py-1 m-1 bg-gray-200 text-black rounded cursor-pointer hover:bg-gray-300"
//             >
//               {category} ×
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Category;














// Process completed successfully.

import React, { useMemo, useCallback, useEffect } from "react";
import { useProductContext } from "../../Context API/ProductProvider";
import Input from "../../Input";

const Category = React.memo(({ isSidebarOpen }) => {
  console.log("Category Component Rendered");

  const { data, setFilteredProducts, selectedCategories, setSelectedCategories } = useProductContext();

  // Memoize unique categories so that recalculation happens only when 'data' changes
  const categories = useMemo(() => {
    return [...new Set(data.map((item) => item.category))];
  }, [data]);

  // useCallback for stable function reference
  const handleCheckbox = useCallback((e) => {
    const value = e.target.value;
    // if (selectedCategories.includes(value)) {
    //   setSelectedCategories((prev) => prev.filter((c) => c !== value));
    // } else {
    //   setSelectedCategories((prev) => [...prev, value]);
    // }
    if (selectedCategories.includes(value)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== value));
    } else {
      setSelectedCategories(selectedCategories => [...selectedCategories, value]);
    }


    
  }, [selectedCategories, setSelectedCategories]);

  // useCallback for stable function reference
  const handleTagRemove = useCallback((category) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== category));
  }, [setSelectedCategories]);

  // Update filtered products when data or selectedCategories change
  useEffect(() => {
    const filteredProducts =
      selectedCategories.length === 0
        ? data
        : data.filter((product) => selectedCategories.includes(product.category));
    setFilteredProducts(filteredProducts);
  }, [data, selectedCategories, setFilteredProducts]);

  return (
    <div className="flex flex-col gap-3">
      <h1>Category</h1>
      {categories.map((category) => (
        <Input
          key={category}
          value={category}
          handleChange={handleCheckbox}
          isSidebarOpen={isSidebarOpen}
          checked={selectedCategories.includes(category)}
        />
      ))}
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap mt-2">
          {selectedCategories.map((category) => (
            <span
              key={category}
              onClick={() => handleTagRemove(category)}
              className="px-2 py-1 m-1 bg-gray-200 text-black rounded cursor-pointer hover:bg-gray-300"
            >
              {category} ×
            </span>
          ))}
        </div>
      )}
    </div>
  );
});

export default Category;
 