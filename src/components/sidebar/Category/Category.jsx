import React, { useState } from "react";
import Input from "../../Input"
import { useProductContext } from "../../Context API/ProductProvider";

function Category({isSidebarOpen}) {
    const{data,  setFilteredProducts} = useProductContext();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const categories = [...new Set(data.map((item)=>item.category))]
    function handleChange(e) {
      const value = e.target.value;
      console.log("value", value);
      
      selectedCategories.includes(value)
        ? setSelectedCategories((prevSelectedCategories) =>
            prevSelectedCategories.filter((c) => c !== value)
          )
        : setSelectedCategories((prevSelectedCategories) => [
            ...prevSelectedCategories,
            value,
          ]);

      if (selectedCategories.length > 0) {
        const filteredProducts = data.filter((product) =>
          selectedCategories.includes(product.category)
        );
        setFilteredProducts(filteredProducts);
      } else {
        setFilteredProducts(data); // Show all products if no category selected
      }

    }

  return( 
 <div className="flex  flex-col">
   <h3>Filter by Category:</h3>
      {categories.map((category) => (
        <Input key={category} value={category} isSidebarOpen={isSidebarOpen}  
         handleChange={handleChange}
           
         
         />
      ))}
 </div>
  );
}

export default Category;
