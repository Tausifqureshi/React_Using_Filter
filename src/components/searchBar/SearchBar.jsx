import React from "react";
import { LuScanSearch } from "react-lu-search";
import {Button}  from "../../page/index"

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="border-2 border-gray-300 p-2 rounded-lg"
      />
      <Button className="rounded-lg cursor-pointer">
        <LuScanSearch />
      </Button>
      
    </div>
  );
}


export default SearchBar;
