
// import React, { useState } from "react";

// function Sidebar() {
//      const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    
//       const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//       };
//   return  <div
//   className={`bg-gray-900 text-white transition-all duration-300 ${
//     isSidebarOpen ? "w-64" : "w-18"
//   }`}
// >
//   {/* Toggle Button */}
//   <button
//     className="bg-gray-800 text-white w-full py-3 text-sm hover:bg-gray-700"
//     onClick={toggleSidebar}
//   >
//     {isSidebarOpen ? "<<" : ">>"}
//   </button>

//   {/* Menu Items */}
//   <ul className="mt-4 space-y-2">
//     <li className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
//       Home
//     </li>
//     <li className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
//       Trending
//     </li>
//     <li className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
//       Subscriptions
//     </li>
//     <li className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
//       Library
//     </li>
//   </ul>
// </div>
//   ;
// }

// export default Sidebar;







// // import React from "react";
// // // Import icons from Heroicons v2
// // import { HomeIcon, VideoCameraIcon, UsersIcon, CogIcon } from '@heroicons/react/24/outline';

// // const Sidebar = () => {
// //   return (
// //     <div className="w-64 bg-gray-900 text-gray-100">
// //       {/* Logo Section */}
// //       <div className="p-4 text-center font-bold text-xl bg-gray-800">
// //         MySidebar
// //       </div>

// //       {/* Navigation Links */}
// //       <ul className="mt-4 space-y-2">
// //         <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
// //           <HomeIcon className="w-6 h-6 mr-3" />
// //           Home
// //         </li>
// //         <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
// //           <VideoCameraIcon className="w-6 h-6 mr-3" />
// //           Videos
// //         </li>
// //         <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
// //           <UsersIcon className="w-6 h-6 mr-3" />
// //           Community
// //         </li>
// //         <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer">
// //           <CogIcon className="w-6 h-6 mr-3" />
// //           Settings
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;

















// import React, { useState } from "react";
// // Importing icons from react-icons
// import { FaHome, FaRegBell, FaRegListAlt, FaBook } from 'react-icons/fa';

// function Sidebar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div
//       className={`bg-gray-900 text-white transition-all duration-300 ${
//         isSidebarOpen ? "w-64" : "w-18"
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
//         <li className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
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
//       </ul>
//     </div>
//   );
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
