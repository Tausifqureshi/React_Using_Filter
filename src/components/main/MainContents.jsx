// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Sidebar from "../sidebar/Sidebar";
// import NavBar from "../navbar/NavBar";
// import Input from "../Input";

// const Main = () => {
//   const location = useLocation(); // Current URL path
//   return (
//     <>
//       {/* Navbar */}
//       <NavBar />

//       {/* Main Layout */}
//        <div className="flex h-screen">
//         {/* Sidebar: Only show on / Page */}
//         {(location.pathname === "/") && <Sidebar />}

//         {/* Main Content */}
//         <div className="flex-1 bg-gray-100 p-6 text-gray-800" >
//           <Outlet />
//         </div>
//       </div>
//       <Input />
//     </>
//   );
// };

// export default Main;


import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import NavBar from "../navbar/NavBar";
import Footer from "../../page/Footer/Footer";
import Header from "../header/Header";
// import ProductList from "../header/ProductList";


const MainContents = () => {

  const location = useLocation(); // Current URL path
  const isHomePage = location.pathname === "/";// Check if current path is "/"
 
  return (

    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar/>
      <Header />

      {/* Main Content Layout */}
      {/* <div className="flex flex-1"> */}
      <div className={`flex mt-5 mx-2 ${isHomePage  ? "" : "min-h-fit"}`}>
        {/* Sidebar: Only show on / Page */}
        {isHomePage  && <Sidebar />}

        {/* Main Content */}
        <div
          className={`flex-1  text-gray-800 ${
            isHomePage ? "bg-gray-200" : "bg-white"
          }`}
        >
          <Outlet />
        </div>
      </div>

      {/* Input: Always at the Bottom */}
      <div className="border-t py-4 px-2 first-line: bg-gray-200 mt-5">
        <Footer />
      </div>
    </div>
 
  );
};

export default MainContents;
