    // Increment quantity

    // incrementQuantity: (state, action) => {
    //   // return {
    //   //   ...state,    // Pura state ko copy karo
    //   //   cart: state.cart.map((item) => { // Cart mein jo bhi items hain unko map karo
    //   //     if (item.id === action.payload) { // Agar item ka id action.payload ke barabar hai toh us item ka quantity increment karo
    //   //       return { ...item, quantity: item.quantity + 1 }; // Item ko copy karke quantity increment karo
    //   //     }

    //   //     return item; // Agar item ka id action.payload ke barabar nahi hai toh us item ko as it is return karo
    //   //   }),
    //   // };
    //   state.cart = state.cart.map((item) => { // Cart mein jo bhi items hain unko map karo
    //     if (item.id === action.payload) { // Agar item ka id action.payload ke barabar hai toh us item ka quantity increment karo
    //       return { ...item, quantity: item.quantity + 1 }; // Item ko copy karke quantity increment karo
    //     }
    //     return item; // Agar item ka id action.payload ke barabar nahi hai toh us item ko as it is return karo
    //   });
    // },







  //BrandFilter Components code.
  //  import React, { useEffect } from "react";
  //  import { useProductContext } from "../../Context API/ProductProvider";
  //  import Input from "../../Input";
   
  //  function BrandFilter({ isSidebarOpen }) {
  //    const { data, selectedBrand, setSelectedBrand, setFilteredProducts } =
  //      useProductContext();
  //    console.log(selectedBrand, "selectedBrand");
     
  //    const brand = [...new Set(data.map((item) => item.brand))];
  //    const handleChange = (e) => {
  //      console.log(e.target.value);
  //      const targetValue = e.target.value;
  //      if (selectedBrand.includes(targetValue)) {
  //        setSelectedBrand((prev) => prev.filter((c) => c !== targetValue));
  //      } else {
  //        setSelectedBrand((prev) => [...prev, targetValue]);
  //      }
  //    };
         
  //    useEffect(() => {
  //      const filteredProducts =
  //        selectedBrand.length === 0
  //          ? data
  //          : data.filter((item) => selectedBrand.includes(item.brand));
  //      setFilteredProducts(filteredProducts);
  //    }, [selectedBrand, data, setFilteredProducts]);
   
  //    return (
  //      <div className="">
  //        <h1>BrandFilter </h1>
  //        {brand.map((value, index) => (
  //          <Input
  //            key={index}
  //            type="checkbox"
  //            value={value}
  //            //   checked={selectedBrand.includes(value)}
  //            isSidebarOpen={isSidebarOpen}
  //            handleChange={handleChange}
  //            checked={selectedBrand.includes(value)}
  //          />
  //        ))}
  //      </div>
  //    );
  //  }
   
  //  export default BrandFilter;
    
  //   const dynamicFilter = [...new Set(data.flatMap((item) => item.reviews.map((review) => review.rating)))];
  //   const dynamicFilter = [...new Set(data.flatMap((item) => item.reviews.comment))];





































  // Products.js
import React, { useState } from "react";
import Product from "./Product";
import { useProductContext } from "../Context API/ProductProvider";

const Products = React.memo(() => {
  console.log("Products Component Rendered!");
  const { loading, error, filteredProducts, handleAddToCart, cart } = useProductContext();
  const [visibleProducts, setVisibleProducts] = useState(8); // Start with 8 products

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4); // Load 4 more products on click
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-2">
      {filteredProducts.length > 0 ? (
        filteredProducts.slice(0, visibleProducts).map((item) => (
          <Product key={item.id} item={item} handleAddToCart={handleAddToCart} cart={cart} />
        ))
      ) : (
        <p>No products found</p>
      )}

      {visibleProducts < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            onClick={loadMoreProducts}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
});

export default Products;

// Product.js
import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Product = React.memo(({ item, handleAddToCart, cart }) => {
  console.log("Product Component Rendered!");
  const navigate = useNavigate();

  const addToCartHandler = () => {
    const existingProduct = cart.find((product) => product.id === item.id);
    if (existingProduct) {
      toast.info("Product already added", {
        autoClose: 1500,
        position: "top-right",
        theme: "light",
      });
    } else {
      const productToAdd = { ...item, quantity: 1 };
      handleAddToCart(productToAdd);
    }
  };

  return (
    <div className="border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden">
      <div
        className="w-full bg-gray-100 cursor-pointer"
        style={{ aspectRatio: "4/3" }}
        onClick={() => navigate(`/productsInfo/${item.id}`)}
      >
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-full object-contain mix-blend-darken py-3 px-1"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors truncate">
          {item.title}
        </h3>
        <p className="text-xl font-bold text-green-600 mt-2">${item.price}</p>
        <p className="text-xl font-bold text-green-600 mt-2">{item.availabilityStatus}</p>
        <h4 className="text-xl font-bold text-green-600 mt-2">Available: {item.stock}</h4>

        <Button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-full mt-4 w-full transition-all duration-300"
          onClick={addToCartHandler}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
});

export default Product;
