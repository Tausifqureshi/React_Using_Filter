// import React, { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";
// import SearchBar from "../searchBar/SearchBar";

// function Navbar() {
//   console.log("Navbar Component Rendered");

//   const [isVisible, setIsVisible] = useState(true); // Navbar dikh raha hai ya nahi
//   const [isScrolled, setIsScrolled] = useState(false); // Scroll hone par color change hoga
//   const [lastScrollY, setLastScrollY] = useState(0); // Pichla scroll position store karega

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         setIsVisible(false); // Scroll down → Hide navbar
//       } else {
//         setIsVisible(true); // Scroll up → Show navbar
//       }

//       // Navbar color change logic
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }

//       setLastScrollY(window.scrollY); // Last scroll position update karo
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   const navItem = [
//     // { name: "Home", URL: "/" },
//     { name: "Home", URL: "/home" },
//     { name: "About", URL: "/about" },
//     { name: "Contact", URL: "/contact" },
//     { name: "Signup", URL: "/signup" },
//     { name: "Login", URL: "/login" },
//     { name: "Cart", URL: "/cart" },
//   ];

//   return (
//     <div
//       className={`
//         p-4 sticky top-0 z-50 transition-all duration-300
//         ${isVisible ? "translate-y-0" : "-translate-y-full"}
//         ${isScrolled ? "bg-white shadow-md" : "bg-slate-700"}
//       `}
//     >
//       <nav className="flex justify-between items-center">
//         <div className={isScrolled ? "text-black" : "text-white"}>
//           <h1>
//             <Link to="/">Logo</Link>
//           </h1>
//         </div>

//         <div>
//           <SearchBar />
//         </div>
//         <ul className="flex gap-4 items-center">
//           {navItem.map((item) => (
//             <li
//               key={item.URL}
//               className="hover:bg-gray-500 cursor-pointer px-2 py-2"
//             >
//               <NavLink
//                 to={item.URL}
//                 className={
//                   ({ isActive }) =>
//                     isActive
//                       ? "text-blue-500 no-underline border-b-2 border-blue-500"
//                       : isScrolled
//                       ? "text-black hover:text-gray-700"
//                       : "text-white hover:text-gray-300"
//                   //                 `
//                   // px-4 py-2 rounded-md transition-colors duration-200
//                   // ${isActive ? "text-blue-500 border-b-2 border-blue-500 font-bold" : ""}
//                   // ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"}
//                   // `
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Importing hamburger menu icons

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle
  //  const [isSearching, setIsSearching] = useState(false); // 🆕 Add this

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
    { name: "Home", URL: "/home" },
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
            {/* {isMenuOpen ? <HiX /> : <HiMenuAlt3 />} */}
            <HiMenuAlt3 /> {/* <-- Yaha sirf hamburger icon rahega */}

          </button>
        </div>

        {/* Navigation Links Desktop*/}
        <ul className="hidden md:flex gap-6 items-center">
          {navItem.map((item) => (
            <li key={item.URL} className="hover:text-blue-500 cursor-pointer">
              <NavLink
                to={item.URL}
                className={({ isActive }) =>
                  `
                  px-4 py-2 rounded-md transition-colors duration-200
                  ${
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "hover:text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {/* Mobile Sidebar (Slide from left) */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
              <HiX />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 p-4">
            {navItem.map((item) => (
              <li key={item.URL}>
                <NavLink
                  to={item.URL}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-500"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Background Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </nav>

      {/* Mobile Menu Dropdown */}
    </div>
  );
}

export default Navbar;
