import React from "react";
// import NavBar from "./components/navbar/Navbar";
// import Sidebar from "./components/sidebar/Sidebar";
import MainContents from "./components/main/MainContents";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Contact, Cart } from "./page/index";
import { Provider } from "react-redux";
import store from "./Redux/store";
import ProductProvider from "./components/Context API/ProductProvider";
import Header from "./components/header/Header";
import ProductList from "./components/header/ProductList";
import ProductInfo from "./components/prdoductInfo/ProductsInfo";
import Signup from "./components/ragistration/Signup";
import Loging from "./components/ragistration/Loging";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  console.log("App Component");
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

        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Loging />,
        },

        {
          path: "/",
          element: <Header />,
        },
        {  
          path: "/productsList/:category",
          element: <ProductList />,
        },

        {
          path: "/productsInfo/:id",
          element: <ProductInfo />,
        },
      ],
    },
  ]);
  return (
    // <div className="text-3xl text-center my-5">App
    <>
      <Provider store={store}>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
