import React, { useState, useEffect } from "react";
import { LuScanSearch } from "react-icons/lu";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/productSlice";
import { useProductContext } from "../Context API/ProductProvider";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  // const [search, setSearch] = useState("");
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.product.data);
  // console.log("PRODUCT DATA FROM REDUX",products);
  const { data, setFilteredProducts } = useProductContext();

  // Is tara se bhi likh sakte ho filter laga sakte hai
  useEffect(() => {
    // if(searchQuery === ""){ // Agar searchQuery khali hai toh filteredProducts me data dal do
    //   setFilteredProducts(data); // `data` me jo bhi products hai usko filteredProducts me dal do
    //   return;// return kar do
    //  };
    // const filteredProducts = data.filter((product) =>
    //  product.title.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    // setFilteredProducts(filteredProducts); // filteredProducts me filteredProducts dal do



    if (searchQuery.trim() === "") { // Agar searchQuery khali hai toh filteredProducts me data dal do
      setFilteredProducts(data); // `data` me jo bhi products hai usko filteredProducts me dal do
      return; // return kar do
    }
    const filterProduct = data.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    ); // searchQuery me jo value hai usko lowercase me convert karke check karo ki product.title me hai ya nahi

    setFilteredProducts(filterProduct); // filteredProducts me filteredProducts dal do
  }, [data, searchQuery, setFilteredProducts]); // Ye dependencies change hone par effect run hoga


  // useEffect(() => {
  //   const filtered = searchQuery.trim() // Agar searchQuery khali hai toh filteredProducts me data dal do
  //     ? data.filter((product) => //
  //         product.title.toLoerCase().includes(searchQuery.toLowerCase()) // searchQuery me jo value hai usko lowercase me convert karke check karo ki product.title me hai ya nahi
  //       )
  //     : data; // return kar do
  //     setFilteredProducts(filtered); // filteredProducts me filteredProducts dal do
  // }, [data, searchQuery, setFilteredProducts]);

  return (
    <div className="relative flex items-center bg-white rounded-full border border-gray-300 shadow-sm w-[26rem]">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 text-sm text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Button className="absolute right-2 flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all">
        <LuScanSearch />
      </Button>
    </div>
  );
}

export default SearchBar;
