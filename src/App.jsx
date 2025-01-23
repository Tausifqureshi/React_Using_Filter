import React from "react";
// import NavBar from "./components/navbar/Navbar";
// import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
// import MainContent from "./components/MainContent";
import Footer from "./page/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    
    children: [
      // {
      //   path: "/", // Default route
      //   element: <MainContent />, // Landing page with products
      // },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/footer",
        element: <Footer />
      },
     
     
    ],
  },
  ]);
  return (
    // <div className="text-3xl text-center my-5">App
     <> 
     
      <RouterProvider router={router} />

      

    </>
  );
}

export default App;
