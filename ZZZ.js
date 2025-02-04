import React, { useState, useEffect } from "react";
import Input from "../../Input";
import { useProductContext } from "../../Context API/ProductProvider";

function Category({ isSidebarOpen }) {
  const { data, setFilteredProducts } = useProductContext();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = [...new Set(data.map((item) => item.category))];

  // function handleChange(e) {
  //   // const value = e.target.value;
  //   // setSelectedCategories((prevSelectedCategories) =>
  //   //   prevSelectedCategories.includes(value)
  //   //     ? prevSelectedCategories.filter((c) => c !== value)
  //   //     : [...prevSelectedCategories, value]
  //   // );


  //   const value = e.target.value;
  //   if (selectedCategories.includes(value)) {
  //     setSelectedCategories((prevSelectedCategories) =>
  //       prevSelectedCategories.filter((c) => c !== value)
  //     );
  //   } else {
  //     setSelectedCategories((prevSelectedCategories) =>
  //       [...prevSelectedCategories, value]
  //     );
  //   }
  // }



  // Filtering logic ko useEffect ke andar rakho
  function handleChange(e) {
    // const value = e.target.value; // Jo category select ya deselect ho rahi hai, uska value
  
    // // Agar category select nahi ki gayi, toh usko add karte hain
    // if (!selectedCategories.includes(value)) {
    //   setSelectedCategories((prevSelectedCategories) => [
    //     ...prevSelectedCategories, // Pura previous selectedCategories ko leke, naye category ko add karte hain
    //     value,
    //   ]);
    // } 
    // // Agar category pehle se selected hai, toh usko remove karte hain
    // else {
    //   setSelectedCategories((prevSelectedCategories) =>
    //     prevSelectedCategories.filter((c) => c !== value) // Filter out karte hain us category ko
    //   );
    // }


    const valueSelected = e.target.value; // Jo category select ya deselect ho rahi hai, uska value
    setSelectedCategories((prevSelectedCategories) => 
      !prevSelectedCategories.includes(valueSelected)
        ? [...prevSelectedCategories, valueSelected] // Agar category select nahi hai, toh add karo
        : prevSelectedCategories.filter((c) => c !== valueSelected) // Agar already selected hai, toh remove karo
    );
    


  }
  
 
  useEffect(() => {
    // if (selectedCategories.length > 0) {
    //   const filteredProducts = data.filter((product) =>
    //     selectedCategories.includes(product.category)
    //   );
    //   setFilteredProducts(filteredProducts);
    // } else {
    //   setFilteredProducts(data); // Show all products if no category selected
    // }


    const filteredProducts = 
      selectedCategories.length > 0
        ? data.filter((product) =>
            selectedCategories.includes(product.category)
          )
        : data; // Show all products if no category selected

    setFilteredProducts(filteredProducts);



  }, [selectedCategories, data, setFilteredProducts]); // Dependencies: selectedCategories update hone pe run hoga

  
  return (
    <div className="flex flex-col">
      <h3>Filter by Category:</h3>
      {categories.map((category) => (
        <Input
          key={category}
          value={category}
          isSidebarOpen={isSidebarOpen}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

export default Category;
