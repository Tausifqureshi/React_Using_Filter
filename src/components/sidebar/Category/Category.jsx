import React from "react";
import Input from "../../Input"
import { useProductContext } from "../../Context API/ProductProvider";

function Category({isSidebarOpen}) {
    const produtsContex = useProductContext();
    console.log("produtsContex",produtsContex);
  return( 
 <div className="flex  flex-col">
  <Input isSidebarOpen = {isSidebarOpen}/>
  <Input isSidebarOpen = {isSidebarOpen}/>
  <Input isSidebarOpen = {isSidebarOpen}/>
  <Input isSidebarOpen = {isSidebarOpen}/>
  <Input isSidebarOpen = {isSidebarOpen}/>
  <h1>Category {produtsContex.App}</h1>
 
 </div>
  );
}

export default Category;
