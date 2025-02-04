
import React, { useState, useEffect } from "react";
import Input from "../../Input";
import { useProductContext } from "../../Context API/ProductProvider";

function Category({ isSidebarOpen }) {
  const { data, setFilteredProducts } = useProductContext();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [...new Set(data.map((item) => item.category))];

  // handleCategoryChange function for selecting/deselecting categories
  const handleCategoryChange = (category) => {
    // let updatedCategories = selectedCategories.includes(category)
    //   ? selectedCategories.filter((c) => c !== category)
    //   : [...selectedCategories, category];

    // setSelectedCategories(updatedCategories);

    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.filter((c) => c !== category)
      );
    } else {
      setSelectedCategories((prevSelectedCategories) =>  
        [...prevSelectedCategories, category]
      );
    }
   


  };    

  // Effect hook for filtering products whenever selectedCategories changes
  useEffect(() => {
    // const filteredProducts =
    //   selectedCategories.length > 0
    //     ? data.filter((product) => selectedCategories.includes(product.category))
    //     : data; // Show all products if no category selected

    // setFilteredProducts(filteredProducts); // Update the filtered products state

    if (selectedCategories.length > 0) {
      const filteredProducts = data.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(data); // Show all products if no category selected
    }



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











//    



import React, { useState, useEffect } from "react";
import Input from "../../Input";
import { useProductContext } from "../../Context API/ProductProvider";

function Category({ isSidebarOpen }) {
  const { data, setFilteredProducts } = useProductContext();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [...new Set(data.map((item) => item.category))];

  // Filtering products whenever selectedCategories changes
  useEffect(() => {
    // const filteredProducts = selectedCategories.length
    //   ? data.filter((item) => selectedCategories.includes(item.category))
    //   : data; // Show all products if no category selected
    // setFilteredProducts(filteredProducts);

    if (selectedCategories.length > 0) {
      const filteredProducts = data.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(data); // Show all products if no category selected
    }
  }, [selectedCategories, data, setFilteredProducts]);

  function handleChange(e) {
    // const value = e.target.value;
    // setSelectedCategories((prevSelectedCategories) => {
    //   if (prevSelectedCategories.includes(value)) {
    //     // Remove category if already selected
    //     return prevSelectedCategories.filter((item) => item !== value);
    //   } else {
    //     // Add category if not selected
    //     return [...prevSelectedCategories, value];
    //   }
    // });

    const value = e.target.value;
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(value)
        ? prevSelectedCategories.filter((item) => item !== value)
        : [...prevSelectedCategories, value]
    );

  }

  

  return (
    <div className="flex flex-col">
      <h3>Filter by Category:</h3>
      {categories.map((category) => (
        <Input
          key={category}
          value={category}
          handleChange={handleChange}
          isSidebarOpen={isSidebarOpen}
        />
      ))}
    </div>
  );
}

// export default Category;
