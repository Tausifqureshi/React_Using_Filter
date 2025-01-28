import React, { useEffect } from "react";
import {fetchProduct } from "../../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((items)=>(
        <Product key={items.id} {...items} />
      ))}
    </div>
  );



  
  // return (
  //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //     {products.map((product) => (
  //       <div key={product.id} className="border p-4 rounded shadow">
  //         <img src={product.image} alt={product.title} className="w-full h-48 object-contain mix-blend-darken  "/>
  //         <h3 className="text-lg font-bold mt-2">{product.title.slice(0, 25)}</h3>
  //         <p className="text-gray-700">{product.price}</p>
  //         <button  className="bg-blue-500 text-white px-4 py-2  mt-2 rounded">
  //           Add to Cart
  //         </button>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Products;




// addToCart: (state, action) => {
//   // state.cart.push(action.payload);
//   // return [...state, action.payload]; // Add to cart mein jo bhi product aayega usko cart mein add karna.
// return {
// ...state, // Pura state ko copy karo
// cart: [...state.cart, action.payload] // Purane cart ko copy karke naye product ko add karo
// };

// },