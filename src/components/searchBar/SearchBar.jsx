import React, { useState, useEffect } from "react";
import { LuScanSearch } from "react-icons/lu";
import Button from "../Button";
import { useProductContext } from "../Context API/ProductProvider";

function SearchBar() {
  const { data, setFilteredProducts, searchQuery, setSearchQuery} = useProductContext();


//useEfect ke sath aisa filtering kart hai.
  // useEffect(() => {
  //   // ✅ Step 1: Agar searchQuery empty ya sirf spaces hai, toh saare products dikhane chahiye.
  //   if (searchQuery.trim() === "") {  
  //     setFilteredProducts(data);  // 🔹 Search bar khali hai, toh saare products dikhaye.
  //     return;  // 🔹 `return` kar diya taaki neeche wala filter execute na ho.
  //   }
  
  //   // ✅ Step 2: Search Query empty nahi hai, toh filter lagana hai.
  //   const filterProduct = data.filter((product) => 
  //     product.title.toLowerCase().includes(searchQuery.toLowerCase())  
  //     // 🔹 `toLowerCase()` ka use kiya hai taaki case-insensitive search ho.
  //     // 🔹 searchQuery me jo value hai usko lowercase me convert karke check karo ki product.title me hai ya nahi
  //   );
  
  //   // ✅ Step 3: Filtered products ko state me update karo.
  //   setFilteredProducts(filterProduct);  
  
  // }, [data, searchQuery, setFilteredProducts]);  
//   // 🔹 Ye effect tab chalega jab `data`, `searchQuery`, ya `setFilteredProducts` change hoga.


function handleChange (e){
  // is me first data show agr search bar khali hai baad me filtering. dono me se jo hasn pade o kar sakte hai but real case me aisa hota hai ya jana zaruri hai.dono tara se kar sakte hai. indoono me first data show kar rehai.

  // const searchValue = e.target.value; // Jo value search bar pe change ho rahi hai, uska value millenge.
  // setSearchQuery(searchValue);

  // if(searchValue.trim()=== "") { // ✅ Step 1: Agar searchQuery empty ya sirf spaces hai, toh saare products dikhane chahiye.
  // setFilteredProducts(data);  // 🔹 Search bar khali hai, toh saare products dikhaye.
  // return // 🔹 `return` kar diya taaki neeche wala filter execute na ho.
  // }

  // ✅ Step 2: Search Query empty nahi hai, toh filter lagana hai.
  // const filterData = data.filter((item)=>item.title.toLowerCase().includes(searchValue));
  // 🔹 `toLowerCase()` ka use kiya hai taaki case-insensitive search ho.
  // 🔹 searchQuery me jo value hai usko lowercase me convert karke check karo ki product.title me hai ya nahi

  // ✅ Step 3: Filtered products ko state me update karo.
  // setFilteredProducts(filterData);

    
  
  //////////////////////////////
  const searchValue = e.target.value; 
  setSearchQuery(searchValue);
  // Agar searchQuery ka `trim()` empty string hai, iska matlab user ne kuch enter nahi kiya ya sirf spaces diye hain. Aise case me, hame saare products dikhane chahiye, isliye `data` ko directly set kar diya.
  const filterData = searchValue.trim() === ""
    ? data // ✅ Search bar khali hai, toh saare products dikhaye.
    : data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
     // 🔹 `toLowerCase()` ka use kiya hai taaki case-insensitive search ho.
    // 🔹 searchQuery me jo value hai usko lowercase me convert karke check karo ki product.title me hai ya nahi
    );
    console.log("Search Query:", searchValue);  // ✅ Search bar ka value sahi ara hai ya nahi
    console.log("Filtered Products:", filterData); // ✅ Filtered list sahi generate ho rahi hai ya nahi
    
  // ✅ Step 3: Filtered products ko state me update karo.
  setFilteredProducts(filterData);
  
   
}

// is me ham phele filter kar re baad me data show kar re 
// function handleChange(e){
//       // const searchValue = e.target.value;
//   // setSearchQuery(searchValue);
//   // const filterData = searchValue.trim().length > 0 ?
//   // data.filter((item) =>
//   //       item.title.toLowerCase().includes(searchValue.toLowerCase())
//   //     ) : data

//   //     setFilteredProducts(filterData)
  


//   const searchValue = e.target.value; // ✅ Spelling fix
//   setSearchQuery(searchValue);
  
//   if (searchValue.trim().length > 0) {
//     const filterData = data.filter((item) =>
//       item.title.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     setFilteredProducts(filterData); // ✅ Filtered data ko set karna zaroori hai
//   } else {
//     setFilteredProducts(data); // ✅ Agar search empty hai, toh saara data dikhao
//   }



// let searchValue = e.target.value; // Jo value search bar pe change ho rahi hai, uska value millenge.
// setSearchQuery(searchValue);
// if(searchValue.trim() !== ""){
//   const filterData = data.filter((item)=>{
//     return item.title.toLowerCase().includes(searchValue.toLowerCase())
//   })
//   setFilteredProducts(filterData)
// }
// else{
//   setFilteredProducts(data)
// }
// }
  
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
