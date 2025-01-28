import React from "react";
// import NavBar from "./components/navbar/Navbar";
// import Sidebar from "./components/sidebar/Sidebar";
import MainContents from "./components/main/MainContents";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {Home, About, Contact} from "./page/index";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContents />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    // <div className="text-3xl text-center my-5">App
    <>
     <Provider store={store}>
        <RouterProvider router={router} />
     </Provider>
    </>
  );
}

export default App;
