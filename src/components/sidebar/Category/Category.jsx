import React, { useEffect, useState } from "react";
import Input from "../../Input"
import { useProductContext } from "../../Context API/ProductProvider";

function Category({isSidebarOpen}) {
const {data, setFilteredProducts} = useProductContext()
const [selectedCategories, setSelectedCategories] = useState([]);


  return( 
  <div className="flex flex-col">
   <h3>Filter by Category:</h3>
 </div>
  );
}

export default Category;
