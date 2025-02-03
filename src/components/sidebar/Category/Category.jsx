import React, { useState } from "react";
import Input from "../../Input"
import { useProductContext } from "../../Context API/ProductProvider";

function Category({isSidebarOpen}) {
    const [isSelected, setIsSelected] = useState([]);
    const produtsContex = useProductContext();
    console.log("produtsContex",produtsContex);

  return( 
 <div className="flex  flex-col">
  <Input isSidebarOpen = {isSidebarOpen}/>
  <Input isSidebarOpen = {isSidebarOpen}/>
  <Input isSidebarOpen = {isSidebarOpen}/>
  <Input isSidebarOpen = {isSidebarOpen}/>
  <Input isSidebarOpen = {isSidebarOpen}/>
 
 
 </div>
  );
}

export default Category;
