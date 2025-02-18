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

        {
          path: "/cart",
          element: <Cart />,
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
      </Provider>
    </>
  );
}

export default App;
