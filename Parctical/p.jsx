  
  // import React from "react";
  // import { NavLink } from "react-router-dom";
  
  // const NavBar = () => {
  //   const navItems = [
  //     { name: "Home", slug: "/" },
  //     { name: "Login", slug: "/login" },
  //     { name: "Signup", slug: "/signup" },
  //     { name: "All Posts", slug: "/all-posts" },
  //     { name: "Add Post", slug: "/add-post" },
  //   ];
  //   return (
  //     <nav>
  //       <ul className="flex list-none gap-4">
  //         {navItems.map((item) => (
  //           <li key={item.slug}>
  //             <NavLink
  //               to={item.slug}
  //               className={({ isActive }) =>
  //                 `text-blue-500 no-underline ${
  //                   isActive ? "font-bold border-b-2 border-blue-500" : "hover:text-blue-700"
  //                 }`
  //               }
  //             >
  //               {item.name}
  //             </NavLink>
  //             {/* {item.name} */}
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>
  //   );
  // };
  
  // export default NavBar;
  

  {/* <li
              key={item.URL}
              className="hover:bg-blue-100 cursor-pointer px-2 py-2"
            >
              <NavLink to={item.URL}>{item.name}</NavLink>
            </li> */}










            // const response = await fetch("https://fakestoreapi.com/products");
// // https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json  // GeekTrust Api 










import React from "react";
import { LuScanSearch } from "react-icons/lu";

function SearchBar() {
  return (
    <div className="relative flex items-center bg-white rounded-full border border-gray-300 shadow-sm w-[26rem]">
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
