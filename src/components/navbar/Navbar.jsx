import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

function Navbar() {
  console.log("Navbar Component Rendered");
  
  const [isVisible, setIsVisible] = useState(true); // Navbar dikh raha hai ya nahi
  const [isScrolled, setIsScrolled] = useState(false); // Scroll hone par color change hoga
  const [lastScrollY, setLastScrollY] = useState(0); // Pichla scroll position store karega

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Scroll down → Hide navbar
      } else {
        setIsVisible(true); // Scroll up → Show navbar
      }

      // Navbar color change logic
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(window.scrollY); // Last scroll position update karo
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
 
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
      className={`
        p-4 sticky top-0 z-50 transition-all duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"} 
        ${isScrolled ? "bg-white shadow-md" : "bg-slate-700"}
      `}
    >
      <nav className="flex justify-between items-center">
        <div className={isScrolled ? "text-black" : "text-white"}>
          <h1>
            <Link to="/">Logo</Link>
          </h1>
        </div>

        <div>
          <SearchBar />
        </div>
        <ul className="flex gap-4 items-center">
          {navItem.map((item) => (
            <li
              key={item.URL}
              className="hover:bg-gray-500 cursor-pointer px-2 py-2"
            >
              <NavLink
                to={item.URL}
                className={
                  ({ isActive }) =>
                    isActive
                      ? "text-blue-500 no-underline border-b-2 border-blue-500"
                      : isScrolled
                      ? "text-black hover:text-gray-700"
                      : "text-white hover:text-gray-300"
                  //                 `
                  // px-4 py-2 rounded-md transition-colors duration-200
                  // ${isActive ? "text-blue-500 border-b-2 border-blue-500 font-bold" : ""}
                  // ${isScrolled ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"}
                  // `
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}     

export default Navbar;
