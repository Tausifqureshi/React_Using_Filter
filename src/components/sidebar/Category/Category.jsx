import React, { useState } from "react";
import Input from "../../Input"
import { useProductContext } from "../../Context API/ProductProvider";

function Category({isSidebarOpen}) {
    const{data,  setFilteredProducts} = useProductContext();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const categories = [...new Set(data.map((item)=>item.category))]




  return( 
 <div className="flex  flex-col">
   <h3>Filter by Category:</h3>
      {categories.map((category) => (
        <Input key={category} value={category} handleChange={handleChange} isSidebarOpen={isSidebarOpen} 
           
         
         />
      ))}
 </div>
  );
}

export default Category;
