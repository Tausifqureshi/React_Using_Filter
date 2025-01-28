import React, { useEffect } from "react";
import {fetchProduct } from "../../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden"
        >
          <div className="w-full bg-gray-100 " style={{ aspectRatio: '6/3' }}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain mix-blend-darken"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors truncate">
              {product.title}
            </h3>
            <p className="text-xl font-bold text-green-600 mt-2">${product.price.toFixed(2)}</p>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-full mt-4 w-full transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
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
