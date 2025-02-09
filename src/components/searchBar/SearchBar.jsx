import React, { useState, useEffect } from "react";
import { LuScanSearch } from "react-icons/lu";
import Button from "../Button";
import { useProductContext } from "../Context API/ProductProvider";

function SearchBar() {
  const { data, setFilteredProducts, searchQuery, setSearchQuery} = useProductContext();

  function handleChange(e) {
    const searchValue = e.target.value;
    setSearchQuery(searchValue);
  
    if (searchValue.trim()) {
      const filtered = data.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(data); // Jab search empty ho, saare products dikhayein
    }
  }
  
  return (
    <div className="relative flex items-center bg-white rounded-full border border-gray-300 shadow-sm w-[26rem]">
      <input
        type="text"
        placeholder="Search products more..."
        className="w-full px-4 py-2 text-sm text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search"
        value={searchQuery}
        // onChange={(e) => setSearchQuery(e.target.value)} //useEffect ke sath use.
        onChange={handleChange}
      />

      <Button className="absolute right-2 flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all">
        <LuScanSearch />
      </Button>
    </div>
  );
}

export default SearchBar;
