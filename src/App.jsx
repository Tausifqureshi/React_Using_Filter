import React from "react";
import NavBar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContent />,
    
    children: [
      {
        path: "/",
        element: <Home />
      },
     
     
    ],
  },
  ]);
  return (
    // <div className="text-3xl text-center my-5">App
     <div> 
      <NavBar />
      <div className="flex h-screen">
       <Sidebar />
      <RouterProvider router={router} />
      </div>
      

    </div>
  );
}

export default App;
