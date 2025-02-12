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









import React, { useEffect } from "react";
import Input from "../../Input";
import { useProductContext } from "../../Context API/ProductProvider";

function Category({ isSidebarOpen }) {
  const { data, setFilteredProducts, selectedCategories, setSelectedCategories } = useProductContext();
  console.log("selectedCategories", selectedCategories);
  
  const categories = [...new Set(data.map((item) => item.category))];
  
  // Handle checkbox selection
  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  // Remove selected category (Tag removal)
  const handleTagRemove = (category) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== category));
  };

  useEffect(() => {
    setFilteredProducts(
      selectedCategories.length === 0 ? data : data.filter((product) => selectedCategories.includes(product.category))
    );
  }, [data, selectedCategories, setFilteredProducts]);

  return (
    <div className="flex flex-col">
      <h3>Filter by Category:</h3>
      
      {/* Checkbox Filtering */}
      {categories.map((category) => (
        <Input
          key={category}
          value={category}
          isSidebarOpen={isSidebarOpen}
          checked={selectedCategories.includes(category)}
          handleChange={handleCheckboxChange}
        />
      ))}
      
      {/* Selected Category Tags */}
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
}

export default Category;
