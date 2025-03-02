import React, { useEffect } from "react";
import { useProductContext } from "../../Context API/ProductProvider";
import Input from "../../Input";

function BrandFilter({ isSidebarOpen }) {
  const { data, selectedBrand, setSelectedBrand, setFilteredProducts } =
    useProductContext();
    console.log(selectedBrand , "selectedBrand");
  const brand = [...new Set(data.map((item) => item.brand))];
  const handleChange = (e) => {
    console.log(e.target.value);
    const targetValue = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedBrand((prev) => [...prev, targetValue]);
    } else {
      setSelectedBrand((prev) => prev.filter((item) => item !== targetValue));
    }

  
  };
  // useEffect(() => {
  //   const filteredProducts = data.filter((item) => selectedBrand.includes(item.brand));
  //   setFilteredProducts(filteredProducts);
  // }, [selectedBrand, data, setFilteredProducts]);

  // const handleTagRemove = (targetValue) => {
  //   setSelectedBrand((prev) => prev.filter((item) => item !== targetValue));
  //   const filteredProducts = data.filter((item) => selectedBrand.includes(item.brand));
  //   setFilteredProducts(filteredProducts);
  // };
  

  

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
          // checked={selectedBrand.includes(value)}

        />
      ))}

      {/* {selectedBrand.length > 0 && (
        <div className="flex flex-wrap mt-2">
          {selectedBrand.map((value, index) => (
            <span
              key={index}
              onClick={() => handleTagRemove(value)}
              className="px-2 py-1 m-1 bg-gray-200 text-black rounded cursor-pointer hover:bg-gray-300"
            >
              {value} ×
            </span>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default BrandFilter;
