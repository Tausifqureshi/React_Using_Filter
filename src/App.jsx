import React, { useState, version } from "react";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-16"
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
          <li className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            Home
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            Trending
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            Subscriptions
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
            Library
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p>Here is your main content!</p>
        <h1 className="text-green-500">Version: {version}</h1>
      </div>
    </div>
  );
};

export default App;
