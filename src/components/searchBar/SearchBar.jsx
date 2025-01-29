// import React, { useState ,useEffect} from "react";
// import { LuScanSearch } from "react-icons/lu";
// import Button from "../Button";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProduct } from "../../Redux/productSlice";


// function SearchBar() {
//   const [search, setSearch] = useState("");
//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.product.data);
//     console.log("PRODUCT DATA FROM REDUX",products);

    
//   function searchFilter(e) {
//    let searchProducts = e.target.value.toLowerCase();
//    setSearch(searchProducts);

//     if (e.target.value === "") {
//       dispatch(fetchProduct());
//       return;
//     }

//     // const filteredProducts = products.filter((product) =>
//     //   product.title.toLowerCase().includes(e.target.value.toLowerCase())
//     // );

//     // dispatch(fetchProduct(filteredProducts));


//     const filterProducts = products.filter((product)=>
//         product.title.toLowerCase().includes(searchProducts)
//     )

//     dispatch(fetchProduct(filterProducts));


//   }



//   return (
//     <div className="relative flex items-center bg-white rounded-full border border-gray-300 shadow-sm w-[26rem]">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="w-full px-4 py-2 text-sm text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//         aria-label="Search"
//         value={search}
//         onChange={searchFilter}
//       />

//       <Button className="absolute right-2 flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all">
//         <LuScanSearch />
//       </Button>
//     </div>
//   );
// }

// export default SearchBar;





















// import React, { useState } from "react";
// import { LuScanSearch } from "react-icons/lu";
// import Button from "../Button";
// import { useSelector } from "react-redux";

// function SearchBar() {
//   const [search, setSearch] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]); // ✅ Local state for search results
  
//   const products = useSelector((state) => state.product.data); // ✅ Redux se products le rahe hain

//   function searchFilter(e) {
//     let searchValue = e.target.value.toLowerCase();
//     setSearch(searchValue);

//     if (searchValue === "") {
//       setFilteredProducts([]); // ✅ Agar input empty ho to suggestions hata do
//       return;
//     }

//     // ✅ Filter products based on search query
//     const filteredData = products.filter((product) =>
//       product.title.toLowerCase().includes(searchValue)
//     );

//     setFilteredProducts(filteredData);
//   }

//   return (
//     <div className="relative w-[26rem]">
//       <div className="flex items-center bg-white rounded-full border border-gray-300 shadow-sm w-full">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full px-4 py-2 text-sm text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           aria-label="Search"
//           value={search}
//           onChange={searchFilter}
//         />

//         <Button className="absolute right-2 flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all">
//           <LuScanSearch />
//         </Button>
//       </div>

//       {/* ✅ Search Suggestions Dropdown */}
//       {filteredProducts.length > 0 && (
//         <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 max-h-60 overflow-y-auto">
//           {filteredProducts.map((item) => (
//             <li
//               key={item.id}
//               className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//               onClick={() => setSearch(item.title)} // ✅ Click karne pe input fill ho jaye
//             >
//               {item.title}
//             </li>
//           ))} 
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SearchBar;



// import React, { useState } from "react";
// import { LuScanSearch } from "react-icons/lu";
// import Button from "../Button";
// import { useSelector } from "react-redux";

// function SearchBar() {
//   const [search, setSearch] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]); // ✅ Local state for search results
  
//   const products = useSelector((state) => state.product.data); // ✅ Redux se products le rahe hain

//   function searchFilter(e) {
//     let searchValue = e.target.value.toLowerCase();
//     setSearch(searchValue);

//     if (searchValue === "") {
//       setFilteredProducts([]); // ✅ Agar input empty ho to suggestions hata do
//       return;
//     }

//     // ✅ Filter products based on search query
//     const filteredData = products.filter((product) =>
//       product.title.toLowerCase().includes(searchValue)
//     );

//     setFilteredProducts(filteredData);
//   }

//   function handleSelect(productTitle) {
//     setSearch(productTitle); // ✅ Input me value fill karna
//     setFilteredProducts([]); //HATA DIYA (Dropdown rahega)
//   }

//   return (
//     <div className="relative w-[26rem]">
//       <div className="flex items-center bg-white rounded-full border border-gray-300 shadow-sm w-full">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full px-4 py-2 text-sm text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           aria-label="Search"
//           value={search}
//           onChange={searchFilter}
//         />

//         <Button className="absolute right-2 flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all">
//           <LuScanSearch />
//         </Button>
//       </div>

//       {/* ✅ Search Suggestions Dropdown (Dropdown rahega even after click) */}
//       {filteredProducts.length > 0 && (
//         <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 max-h-60 overflow-y-auto">
//           {filteredProducts.map((item) => (
//             <li
//               key={item.id}
//               className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//               onClick={() => handleSelect(item.title)} // ✅ Click pe input fill hoga, dropdown hide nahi hoga
//             >
//               {item.title}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SearchBar;





import React, { useState } from "react";
import { LuScanSearch } from "react-icons/lu";
import Button from "../Button";
import { useSelector } from "react-redux";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]); // ✅ Local state for search results
  const [isInputFocused, setIsInputFocused] = useState(false); // ✅ Track if input is focused
  
  const products = useSelector((state) => state.product.data); // ✅ Redux se products le rahe hain

  function searchFilter(e) {
    let searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);

    if (searchValue === "") {
      setFilteredProducts([]); // ✅ Agar input empty ho to suggestions hata do
      return;
    }

    // ✅ Filter products based on search query
    const filteredData = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );

    setFilteredProducts(filteredData);
  }

  function handleSelect(productTitle) {
    setSearch(productTitle); // ✅ Input me value fill karna
    setFilteredProducts([]); // ✅ Dropdown band karna
  }

  function handleInputFocus() {
    setIsInputFocused(true); // Input box pe focus hone par dropdown show karega
  }

  function handleInputBlur() {
    // Input box ke blur hone par, agar input empty nahi hai, toh dropdown show rahega
    if (search !== "") {
      setIsInputFocused(true);
    } else {
      setIsInputFocused(false);
    }
  }

  return (
    <div className="relative w-[26rem]">
      <div className="flex items-center bg-white rounded-full border border-gray-300 shadow-sm w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search"
          value={search}
          onChange={searchFilter}
          onFocus={handleInputFocus} // ✅ Focused state set
          onBlur={handleInputBlur} // ✅ Focus out hone par input ki condition check karna
        />

        <Button className="absolute right-2 flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all">
          <LuScanSearch />
        </Button>
      </div>

      {/* ✅ Search Suggestions Dropdown */}
      {isInputFocused && filteredProducts.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1 max-h-60 overflow-y-auto">
          {filteredProducts.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(item.title)} // ✅ Value select karne par input box me set ho jayegi aur dropdown band ho jayega
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
