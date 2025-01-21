// import React, { useState, version } from "react";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
     <Sidebar />

     <MainContent />

      {/* Main Content */}
      {/* <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p>Here is your main content!</p>
        <h1 className="text-green-500">Version: {version}</h1>
      </div> */}

      
    </div>
  );
};

export default App;






























// import React from "react";
// import Sidebar from "./components/sidebar/Sidebar";
// import MainContent from "./components/MainContent";

// function App() {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <MainContent />
//     </div>
//   );
// }

// export default App;
