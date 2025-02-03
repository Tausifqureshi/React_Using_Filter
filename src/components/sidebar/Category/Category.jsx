// import React, { useState } from "react";
// import Input from "../../Input"
// import { useProductContext } from "../../Context API/ProductProvider";

// function Category({isSidebarOpen}) {

//     const{data,  setFilteredProducts} = useProductContext();
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const categories = [...new Set(data.map((item)=>item.category))]

//    function handleChange(e) {
//     const value = e.target.value;
//     if (selectedCategories.includes(value)) {
//       setSelectedCategories(selectedCategories.filter((item) => item !== value));
//     } else {
//       setSelectedCategories([...selectedCategories, value]);
//     }
//     const filteredProducts = data.filter((item) =>
//       selectedCategories.includes(item.category)
//     );
//     setFilteredProducts(filteredProducts);
//    }




//   return( 
//  <div className="flex  flex-col">
//    <h3>Filter by Category:</h3>
//       {categories.map((category) => (
//         <Input key={category} value={category} handleChange={setSelectedCategories} isSidebarOpen={isSidebarOpen} />
//       ))}
//  </div>
//   );
// }

// export default Category;






// import React, { useState, useEffect } from "react";
// import Input from "../../Input";
// import { useProductContext } from "../../Context API/ProductProvider";

// function Category({ isSidebarOpen }) {
//   const { data, setFilteredProducts } = useProductContext();
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const categories = [...new Set(data.map((item) => item.category))];

//   // Filtering products whenever selectedCategories changes
// //   useEffect(() => {
// //     const filteredProducts = selectedCategories.length
// //       ? data.filter((item) => selectedCategories.includes(item.category))
// //       : data; // Show all products if no category selected
// //     setFilteredProducts(filteredProducts);
// //   }, [selectedCategories, data, setFilteredProducts]);

// //   function handleChange(e) {
// //     const value = e.target.value;
// //     setSelectedCategories((prevSelectedCategories) => {
// //       if (prevSelectedCategories.includes(value)) {
// //         // Remove category if already selected
// //         return prevSelectedCategories.filter((item) => item !== value);
// //       } else {
// //         // Add category if not selected
// //         return [...prevSelectedCategories, value];
// //       }
// //     });
 // //   }



//   function handleChange(e) {
//     const value = e.target.value;
//     if (selectedCategories.includes(value)) {
//       setSelectedCategories(selectedCategories.filter((item) => item !== value));
//     } else {
//       setSelectedCategories([...selectedCategories, value]);
//     }
//     const filteredProducts = data.filter((item) =>
//       selectedCategories.includes(item.category)
//     );
//     setFilteredProducts(filteredProducts);
//   }

//   return (
//     <div className="flex flex-col">
//       <h3>Filter by Category:</h3>
//       {categories.map((category) => (
//         <Input
//           key={category}
//           value={category}
//           handleChange={handleChange}
//           isSidebarOpen={isSidebarOpen}
//         />
//       ))}
//     </div>
//   );
// }

// export default Category;


















import React, { useState, useEffect } from "react";
import Input from "../../Input";
import { useProductContext } from "../../Context API/ProductProvider";

function Category({ isSidebarOpen }) {
  const { data, setFilteredProducts } = useProductContext();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [...new Set(data.map((item) => item.category))];

  // handleCategoryChange function for selecting/deselecting categories
  const handleCategoryChange = (category) => {
    let updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  };

  // Effect hook for filtering products whenever selectedCategories changes
  useEffect(() => {
    const filteredProducts =
      selectedCategories.length > 0
        ? data.filter((product) => selectedCategories.includes(product.category))
        : data; // Show all products if no category selected

    setFilteredProducts(filteredProducts); // Update the filtered products state
  }, [selectedCategories, data, setFilteredProducts]);

  return (
    <div className="flex flex-col">
      <h3>Filter by Category:</h3>
      {categories.map((category) => (
        <Input
          key={category}
          value={category}
          handleChange={() => handleCategoryChange(category)} // Passing the correct handler
          isSidebarOpen={isSidebarOpen}
        />
      ))}
    </div>
  );
}

export default Category;
