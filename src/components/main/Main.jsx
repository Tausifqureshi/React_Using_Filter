// import React from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../sidebar/Sidebar";
// import Home from "../../page/Home";
// import NavBar from "../navbar/NavBar";


// const MainContent = () => {
//   return (
//     // <div className="flex-1 bg-gray-100 p-4">
//     //   <h1 className="text-2xl font-bold">Main Content</h1>
//     //   <p>Here goes the main content of the page.</p>
//     // </div>
//              <>
//               <NavBar />
//              <div className="flex h-screen">
//              <Sidebar />
                 
          
//             <div className="flex-1 bg-gray-100 p-6 text-gray-800">
//             <h1 className="text-2xl font-bold">Main Content Area</h1>
//             <p>Here is your main content!</p>
//             {/* <h1 className="text-green-500">Version: {version}</h1> */}
//               <Outlet />
//           </div>
//           </div>

//           </>
        
//   );
// };

// export default MainContent;






















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
        {/* Sidebar: Only show on Home page */}
        {(location.pathname === "/" ||location.pathname === "/home") && <Sidebar />}

        {/* Main Content */}
        <div className={`flex-1 bg-gray-100 p-6 text-gray-800 `}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;
