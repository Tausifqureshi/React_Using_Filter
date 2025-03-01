import React from "react";
import { useProductContext } from "../../Context API/ProductProvider";
import Input from "../../Input";

function BrandFilter({ isSidebarOpen }) {
  const { data, selectedBrand, setSelectedBrand, setFilteredProducts } =
    useProductContext();
  const brand = [...new Set(data.map((item) => item.brand))];
  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="">
      <h1>BrandFilter </h1>
      {brand.map((value, index) => (
        <Input
          key={index}
          type="checkbox"
          value={value}
        //   checked={selectedBrand.includes(value)}
        isSidebarOpen={isSidebarOpen}
          handleChange={handleChange}
        />
       
      ))}
    </div>
  );
}

export default BrandFilter;
