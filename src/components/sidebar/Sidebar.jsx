// import React, { useState } from "react";
// // Importing icons from react-icons
// import { FaHome, FaRegBell, FaRegListAlt, FaBook } from "react-icons/fa";
// import Category from "./Category/Category";
// import Price from "./PriceFilter/Price";
// import Clear from "./ClearFilter/Clear";
// import PriceSlider from "./sliderRange/PriceSlider";

// function Sidebar() {
//   console.log(" Sidebar Component Rendered");

//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div
//       className={`h-screen bg-gray-900 overflow-auto text-white transition-all duration-300 ease-in-out  scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-gray-500 ${
//         isSidebarOpen ? "w-64" : "w-17"
//       }`}
//     >
//       {/* Toggle Button */}
//       <button
//         className="bg-gray-800 text-white w-full py-3 text-sm hover:bg-gray-700"
//         onClick={toggleSidebar}
//       >
//         {isSidebarOpen ? "<<" : ">>"}
//       </button>

//       {/* Menu Items */}
//       <ul className="mt-4 space-y-2">
//         <li
//           className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer"
//           title="Home"
//         >
//           <FaHome className="w-6 h-6 mr-3" />
//           {isSidebarOpen && "Home"}
//         </li>
//         <li className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
//           <FaRegBell className="w-6 h-6 mr-3" />
//           {isSidebarOpen && "Subscriptions"}
//         </li>
//         <li className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
//           <FaRegListAlt className="w-6 h-6 mr-3" />
//           {isSidebarOpen && "Trending"}
//         </li>
//         <li className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
//           <FaBook className="w-6 h-6 mr-3" />
//           {isSidebarOpen && "Library"}
//         </li>

//         {/* Duplicate menu items */}
//         <li className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
//           <FaBook className="w-6 h-6 mr-3" />
//           {/* {isSidebarOpen && "Library"} */}
//           Library
//         </li>

//         <Category isSidebarOpen={isSidebarOpen} />
//         <Price isSidebarOpen={isSidebarOpen} />
//         <PriceSlider isSidebarOpen={isSidebarOpen} />
//         <Clear />
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

    


// Process completed successfully.
import React, { useState, useCallback } from "react";
import { FaHome, FaRegBell, FaRegListAlt, FaBook } from "react-icons/fa";
import Category from "./Category/Category";
import Price from "./PriceFilter/Price";
import Clear from "./ClearFilter/Clear";
import PriceSlider from "./sliderRange/PriceSlider";
import RatingFilter from "./ratingFilter/RatingFilter";
import BrandFilter from "./Brand/BrandFilter";
import Dynamic from "./Dynamic";


const Sidebar = () => {
  // console.log("Sidebar Component Rendered");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // useCallback to ensure toggleSidebar reference is stable
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <div
      className={`h-screen bg-gray-900 overflow-auto text-white transition-all duration-300 ease-in-out scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-gray-500 ${
        isSidebarOpen ? "w-64" : "w-17"
      }`}
    >
      {/* Toggle Button */}
      <button
        className="bg-gray-800 text-white w-full py-3 text-sm hover:bg-gray-700"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "<<" : ">>"}
      </button>

      {/* Menu Items */}
      <ul className="mt-4 space-y-2">
        <li
          className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer"
          title="Home"
        >
          <FaHome className="w-6 h-6 mr-3" />
          {isSidebarOpen && "Home"}
        </li>

        <li className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
          <FaRegBell className="w-6 h-6 mr-3" />
          {isSidebarOpen && "Subscriptions"}
        </li>

        <li className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
          <FaRegListAlt className="w-6 h-6 mr-3" />
          {isSidebarOpen && "Trending"}
        </li>

        <li className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
          <FaBook className="w-6 h-6 mr-3" />
          {isSidebarOpen && "Library"}
        </li>

        {/* Duplicate menu item */}
        <li className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
          <FaBook className="w-6 h-6 mr-3" />
          Library
        </li>

        {/* Additional Components */}
        <Category isSidebarOpen={isSidebarOpen} />
        <Price isSidebarOpen={isSidebarOpen} />
        <PriceSlider isSidebarOpen={isSidebarOpen} />
        <RatingFilter isSidebarOpen={isSidebarOpen} />
        <Clear  isSidebarOpen={isSidebarOpen}/>
        <BrandFilter isSidebarOpen={isSidebarOpen}/>
        <Dynamic />

      </ul>
    </div>
  );
};

export default React.memo(Sidebar);
