import React from "react";
import { useProductContext } from "../../Context API/ProductProvider";

function BrandFilter() {
    const { data,selectedBrand, setSelectedBrand, setFilteredProducts } = useProductContext();
    
  return <div> BrandFilter </div>;
}

export default BrandFilter;
