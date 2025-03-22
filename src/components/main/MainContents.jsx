// Process completed successfully.
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import NavBar from "../navbar/NavBar";
import Footer from "../../page/Footer/Footer";
import Header from "../header/Header";

const MainContents = () => {
  console.log("MainContents Component Rendered");

  const location = useLocation(); // Current URL path
  // const isHomePage = location.pathname === "/" ||location.pathname === "/about"; // Check if current path is "/"
  const isHomePage = location.pathname === "/" // Check if current path is "/"
  const hideLayout = ["/signup", "/login"].includes(location.pathname); // Hide on Login & Signup


  return (
    <div className="flex flex-col min-h-screen"> 
      {/* <NavBar /> 
      <Header /> */}
      {/* Navbar, Header (Hide on Login & Signup) */}
      {!hideLayout && <NavBar />}
      {!hideLayout && <Header />}

      {/* Main Content Layout */}
      <div className={`flex mt-5 mx-2 ${isHomePage ? "" : "h-auto"}`}>
        {/* Sidebar: Only show on / Page */}
        {isHomePage && <Sidebar />}
        {/* {(location.pathname === "/" ||location.pathname === "/about") && <Sidebar />} */}

        {/* Main Content */}
        <div
          className={`flex-1  text-gray-800  ${
            isHomePage ? "bg-gray-200" : "bg-white"
          }`}
        >
          <Outlet />
        </div>
      </div>

      {/* <div className="border-t py-4 px-2 first-line: bg-gray-200 mt-5">
        <Footer />
      </div> */}
      {!hideLayout && (
        <div className="border-t py-4 px-2 bg-gray-200 mt-5">
          <Footer />
        </div>
      )}

      
    </div>
  );
};            
        
export default MainContents;
 