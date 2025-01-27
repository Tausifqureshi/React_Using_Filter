import React, { useEffect } from "react";
import {fetchProduct } from "../../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // Dummy product data
  const productList = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
    { id: 4, name: "Product 4", price: "$40" },
    { id: 5, name: "Product 5", price: "$50" },
    { id: 6, name: "Product 6", price: "$60" },
    { id: 7, name: "Product 7", price: "$70" },
    { id: 8, name: "Product 8", price: "$80" },
    { id: 10, name: "Product 9", price: "$90" },
    { id: 11, name: "Product 10", price: "$100" },
    { id: 12, name: "Product 11", price: "$110" },
    { id: 13, name: "Product 12", price: "$120" },
    { id: 14, name: "Product 13", price: "$130" },
    { id: 15, name: "Product 14", price: "$140" },
    { id: 16, name: "Product 15", price: "$150" },
    { id: 117, name: "Product 16", price: "$160" },
    { id: 17, name: "Product 17", price: "$170" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    { id: 19, name: "Product 18", price: "$180" },
    
    
   
   
    
  ];
    
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain mix-blend-darken  "/>
          <h3 className="text-lg font-bold mt-2">{product.title}</h3>
          <p className="text-gray-700">{product.price}</p>
          {/* <button onClick={() => {dispatch(fetchProducts(product))}} className="bg-blue-500 text-white px-4 py-2  mt-2 rounded">
            Add to Cart
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default Products;
