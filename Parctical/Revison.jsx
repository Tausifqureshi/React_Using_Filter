// [1]. useLocation hook used to url path user kaha se ara hai is compornts ms logic yaha hai agar / root paga and /home page tohi hame side bar in dono compoents pe shiw karna haiu warna nhi bus kuch tode change ke baad routre me jage /home karn hoga fir navbar me bhi /home itna hi chnage aise or bhi jitne page pe check aise hi condition laga ke check kar sakte hai.

// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Sidebar from "../sidebar/Sidebar";
// import NavBar from "../navbar/NavBar";

// const Main = () => {
//   const location = useLocation(); // Current URL path
//   return (
//     <>
//       {/* Navbar */}
//       <NavBar />

//       {/* Main Layout */}
//        <div className="flex h-screen">
//         {(location.pathname === "/" ||location.pathname === "/home") && <Sidebar />}
       

//         {/* Main Content */}
//         <div className={`flex-1 bg-gray-100 p-6 text-gray-800 `}>
//           <Outlet />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Main;

// <-------------------------------------------------------------------------------------------------------------> //
