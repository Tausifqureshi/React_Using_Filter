import React from "react";
import Products from "./product/Products";

function MainContent() {
  return <div>
         <h1 className="text-2xl font-bold mb-4">Welcome to Our Store</h1>
         <Products />
  </div>;
}

export default MainContent;
