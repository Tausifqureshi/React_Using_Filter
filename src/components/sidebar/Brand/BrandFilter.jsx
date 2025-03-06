import React, { useEffect } from "react";
import { useProductContext } from "../../Context API/ProductProvider";
import Input from "../../Input";

function BrandFilter({ isSidebarOpen }) {
  const { data, selectedBrand, setSelectedBrand, setFilteredProducts } =
    useProductContext();
  console.log(selectedBrand, "selectedBrand");

  const brand = [...new Set(data.map((item) => item.brand))];

  const handleChange = (e) => {
    // console.log(e.target.value);
    const targetValue = e.target.value;
    selectedBrand.includes(targetValue)
    ?setSelectedBrand(selectedBrand.filter((item)=>item!==targetValue))
    :setSelectedBrand((prev)=>[...prev,targetValue]);
  };
  useEffect(()=>{
    const filteredProducts = selectedBrand.length === 0
    ? data
    : data.filter((item) => selectedBrand.includes(item.brand));
    setFilteredProducts(filteredProducts);
  }, [selectedBrand, data, setFilteredProducts]);
      
 
  return (
    <div className="">
      <h1>BrandFilter </h1>
      {brand.map((value, index) => (
        <Input
          key={index}
          type="checkbox"
          value={value}
          isSidebarOpen={isSidebarOpen}
          handleChange={handleChange}
          checked={selectedBrand.includes(value)}
        />
      ))}
    </div>
  );
}

export default BrandFilter;
