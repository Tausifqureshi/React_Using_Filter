import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import NavBar from "../navbar/NavBar";

const Main = () => {
  const location = useLocation(); // Current URL path
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Main Layout */}
       <div className="flex h-screen">
        {/* Sidebar: Only show on / Page */}
        {(location.pathname === "/") && <Sidebar />}

        {/* Main Content */}
        <div className={`flex-1 bg-gray-100 p-6 text-gray-800 `}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;
