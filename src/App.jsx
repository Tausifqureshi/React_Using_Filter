import React from "react";
// import NavBar from "./components/navbar/Navbar";
// import Sidebar from "./components/sidebar/Sidebar";
import MainContents from "./components/main/MainContents";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
// import MainContent from "./components/MainContent";
import Footer from "./page/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContents />,
    
    children: [
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
