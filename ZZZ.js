import React, { useEffect, useState } from "react";
import Input from "../../Input"
import { useProductContext } from "../../Context API/ProductProvider";

function Category({isSidebarOpen}) {
    const{data,  setFilteredProducts} = useProductContext();
    const [selectedCategories, setSelectedCategories] = useState([]);
    const categories = [...new Set(data.map((item)=>item.category))]

    function handleChange(e) {
      // const value = e.target.value; // Jo category select ya deselect ho rahi hai, uska value millenge.
      // selectedCategories.includes(value) // agar category pehle se selected hai, toh usko remove karte hain
      //   ? setSelectedCategories((prevSelectedCategories) =>
      //       prevSelectedCategories.filter((c) => c !== value)// agar category pehle se selected hai, toh usko remove karte hain
      //     )
      //   : setSelectedCategories((prevSelectedCategories) => [ // agar category select nahi ki gayi, toh usko add karte hain
      //       ...prevSelectedCategories,
      //       value,
      //     ]);

      
      const value = e.target.value; // Jo category select ya deselect ho rahi hai, uska value millenge.
      if (selectedCategories.includes(value)) {
        setSelectedCategories((prevSelectedCategories) =>
          prevSelectedCategories.filter((c) => c !== value) // agar category pehle se selected hai, toh usko remove karte hain
        );
      } else {
        setSelectedCategories((prevSelectedCategories) => [
          ...prevSelectedCategories, // agar category select nahi ki gayi, toh usko add karte hain
          value,
        ]);
      }
   




    //  if(!selectedCategories.includes(value)){
    //   setSelectedCategories((prevSelectedCategories) => [
    //     ...prevSelectedCategories,  // Pura previous selectedCategories ko leke, naye category ko add karte hain
    //     value,
    //   ]);
    //  }else{
    //   setSelectedCategories((prevSelectedCategories) => prevSelectedCategories.filter((c) => c !== value));

    //  }

    // const valueSelected = e.target.value; // Jo category select ya deselect ho rahi hai, uska value
    // setSelectedCategories((prevSelectedCategories) => 
    //   !prevSelectedCategories.includes(valueSelected)
    //     ? [...prevSelectedCategories, valueSelected] // Agar category select nahi hai, toh add karo
    //     : prevSelectedCategories.filter((c) => c !== valueSelected) // Agar already selected hai, toh remove karo
    // );



    }


    useEffect(()=>{
      // 1. agar selectedCategories empty nahi hai toh uska matlab user ne kuch select kiya hai.
      // if (selectedCategories.length > 0) {
      //   const filteredProducts = data.filter((product) =>
      //     selectedCategories.includes(product.category)
      //   );
      //   setFilteredProducts(filteredProducts);
      // } else {
      //   setFilteredProducts(data); // Show all products if no category selected
      // }

        //  const filteredProducts = selectedCategories.length > 0
        //   ? data.filter((product) => selectedCategories.includes(product.category))
        //   : data;
        // setFilteredProducts(filteredProducts);


        // 2. First Data Render agar selectedCategories empty hai toh uska matlab user ne kuch select nahi kiya ya sirf spaces diye hain. Aise case me, hame saare products dikhane chahiye, isliye `data` ko directly set kar diya.
        // const filteredProducts = selectedCategories.length === 0
        // ? data
        // : data.filter((product) => selectedCategories.includes(product.category));
        // setFilteredProducts(filteredProducts);


        if(selectedCategories.length === 0){
          setFilteredProducts(data);
        }
        else{
          const filteredProducts = data.filter((product) => selectedCategories.includes(product.category));
          setFilteredProducts(filteredProducts);
        }




    }, [data, selectedCategories, setFilteredProducts])




  return( 
  <div className="flex flex-col">
   <h3>Filter by Category:</h3>
      {categories.map((category) => (
        <Input key={category} value={category} isSidebarOpen={isSidebarOpen}  
         handleChange={handleChange}
           
         
         />
      ))}
 </div>
  );
}

export default Category;










// Search BAr code
import React, { useState, useEffect } from "react";
import { LuScanSearch } from "react-icons/lu";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../Redux/productSlice";
import { useProductContext } from "../Context API/ProductProvider";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, setFilteredProducts } = useProductContext();

  
//useEfect ke sath aisa filtering kart hai.
//   useEffect(() => {
//     // ✅ Step 1: Agar searchQuery empty ya sirf spaces hai, toh saare products dikhane chahiye.
//     if (searchQuery.trim() === "") {  
//       setFilteredProducts(data);  // 🔹 Search bar khali hai, toh saare products dikhaye.
//       return;  // 🔹 `return` kar diya taaki neeche wala filter execute na ho.
//     }
  
//     // ✅ Step 2: Search Query empty nahi hai, toh filter lagana hai.
//     const filterProduct = data.filter((product) => 
//       product.title.toLowerCase().includes(searchQuery.toLowerCase())  
//       // 🔹 `toLowerCase()` ka use kiya hai taaki case-insensitive search ho.
//       // 🔹 searchQuery me jo value hai usko lowercase me convert karke check karo ki product.title me hai ya nahi
//     );
  
//     // ✅ Step 3: Filtered products ko state me update karo.
//     setFilteredProducts(filterProduct);  
  
//   }, [data, searchQuery, setFilteredProducts]);  
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












function handleChange(e) {
    const value = e.target.value;

    setSelectedCategories((prev) => {
        const updatedCategories = prev.includes(value)
            ? prev.filter((c) => c !== value) // ✅ Remove category
            : [...prev, value]; // ✅ Add category

        // ✅ Yaha prev latest state hai, to isi se filter kar sakte hain
        setFilteredProducts(
            updatedCategories.length === 0
                ? data
                : data.filter((product) => updatedCategories.includes(product.category))
        );

        return updatedCategories;
    });
}
