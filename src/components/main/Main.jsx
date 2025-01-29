// // import React from "react";
// // import { Outlet, useLocation } from "react-router-dom";
// // import Sidebar from "../sidebar/Sidebar";
// // import NavBar from "../navbar/NavBar";
// // import Input from "../Input";

// // const Main = () => {
// //   const location = useLocation(); // Current URL path
// //   return (
// //     <>
// //       {/* Navbar */}
// //       <NavBar />

// //       {/* Main Layout */}
// //        <div className="flex h-screen">
// //         {/* Sidebar: Only show on / Page */}
// //         {(location.pathname === "/") && <Sidebar />}

// //         {/* Main Content */}
// //         <div className="flex-1 bg-gray-100 p-6 text-gray-800" >
// //           <Outlet />
// //         </div>
// //       </div>
// //       <Input />
// //     </>
// //   );
// // };

// // export default Main;



// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Sidebar from "../sidebar/Sidebar";
// import NavBar from "../navbar/NavBar";
// import Input from "../Input";

// const Main = () => {
//   const location = useLocation(); // Current URL path
//   const isHomePage = location.pathname === "/"; // Check if current path is "/"

//   return (
//     <>
//       {/* Navbar */}
//       <NavBar />

//       {/* Main Layout */}
//       <div className={`flex ${isHomePage ? "h-screen" : "h-auto"}`}>
//         {/* Sidebar: Only show on / Page */}
//         {isHomePage && <Sidebar />}

//         {/* Main Content */}
//         <div
//           className={`flex-1 p-6 text-gray-800 ${
//             isHomePage ? "bg-gray-100" : "bg-white"
//           }`}
//         >
//           <Outlet />
//         </div>
//       </div>
//       <Input />
//     </>
//   );
// };

// export default Main;






// NavbarResponsive
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Importing hamburger menu icons

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = [
    { name: "Home", URL: "/" },
    { name: "About", URL: "/about" },
    { name: "Contact", URL: "/contact" },
    { name: "Signup", URL: "/signup" },
    { name: "Login", URL: "/login" },
    { name: "Cart", URL: "/cart" },
  ];

  return (
    <div
      className={`p-4 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-gray-800">Logo</h1>
        </div>

        {/* Search Bar (visible only on md and up screens) */}
        <div className="hidden md:flex items-center space-x-4">
          <SearchBar />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-800"
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Navigation Links Desktop*/}
        <ul className="hidden md:flex gap-6 items-center">
          {navItem.map((item) => (
            <li key={item.URL} className="hover:text-blue-500 cursor-pointer">
              <NavLink
                to={item.URL}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "hover:text-gray-700"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-md md:hidden`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItem.map((item) => (
              <li
                key={item.URL}
                className="w-full text-center py-2 hover:bg-gray-100"
              >
                <NavLink
                  to={item.URL}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  className="block text-gray-700"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;






// Search bar component CODE
import React from "react";
import { LuScanSearch } from "react-icons/lu";

function SearchBar() {
  return (
    <div className="relative flex items-center bg-white rounded-full border border-gray-300 shadow-sm w-80 max-w-full">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search for products more..."
        className="w-full px-4 py-2 text-sm text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Search Icon Button */}
      <button
        className="absolute right-2 flex items-center justify-center w-8 h-8 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all"
        aria-label="Search"
      >
        <LuScanSearch />
      </button>
    </div>
  );
}

export default SearchBar;




// Search Bar Logic Code
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
