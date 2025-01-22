// import React from "react";

// function Sidebar() {
//   return <div>Sidebar</div>;
// }

// export default Sidebar;



import React, { useState } from "react";
// Importing icons from react-icons
import { FaHome, FaRegBell, FaRegListAlt, FaBook } from 'react-icons/fa';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`bg-gray-900 text-white transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "w-64" : "w-14"
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
        <li className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer" title="Home">
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
      </ul>
    </div>
  );
}

export default Sidebar;
