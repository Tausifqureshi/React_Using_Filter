import React from "react";
import { useProductContext } from "../../Context API/ProductProvider";
import Input from "../../Input";

function BrandFilter() {
  const { data, selectedBrand, setSelectedBrand, setFilteredProducts } =
    useProductContext();
  const brand = [...new Set(data.map((item) => item.brand))];

  return (
    <div className="">
      <h1>BrandFilter </h1>
      {brand.map((brand) => (
        <Input 
          key={brand}
          type="checkbox"
          value={brand}
          checked={selectedBrand.includes(brand)}
        //   handleChange={}
        />
       
      ))}
    </div>
  );
}

export default BrandFilter;
