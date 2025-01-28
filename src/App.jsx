import React from "react";
// import NavBar from "./components/navbar/Navbar";
// import Sidebar from "./components/sidebar/Sidebar";
import MainContents from "./components/main/MainContents";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
// import MainContent from "./components/MainContent";
import Input from "./components/Input";
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
          path: "/input",
          element: <Input />,
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
