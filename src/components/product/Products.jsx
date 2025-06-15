// import React from "react";
// import Product from "./Product";
// import { useProductContext } from "../Context API/ProductProvider";

// const Products = () => {
//   console.log("Products Component Rendered!")
//   const { loading, error, filteredProducts, handleAddToCart, cart } =
//     useProductContext(); // Use context to get data, loading, error,

//   if (loading) return <div> Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-2 ">
//       {/* {filteredProducts.length > 0 ? ( // Agar filteredProducts ka length 0 se zyada hai (> 0), toh iska matlab hai kuch products available hain, aur unko show karna hai.
//           filteredProducts.map((product) => (
//             <Product key={product.id} {...product} /> // filteredProducts me jo bhi products hain unko show karna hai.
//           ))
//         ) : (
//           <p>No products found</p> // Agar filteredProducts ka length 0 hai, toh koi product nahi mila, isliye "No products found" show karna hai.
//         )} */}

//       {/* is tara se bhi likh sakte ho */}
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map((item) => {
//           return (
//             <Product
//               key={item.id}
//               {...item}
//               handleAddToCart={handleAddToCart}
//               cart={cart}
//             />
//           );
//         })
//       ) : (
//         <p>No products found</p>
//       )}
//     </div>
//   );
// };

// export default Products;

// Process completed successfully.
import React, { useState } from "react";
import Product from "./Product";
import { useProductContext } from "../Context API/ProductProvider";

const Products = React.memo(() => {
  console.log("Products Component Rendered!");
  const { loading, error, filteredProducts, handleAddToCart, cart } =
    useProductContext();
  const [visibleProducts, setVisibleProducts] = useState(8); // Start with 8 products
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // const loadMoreProducts = () => {
  //   setVisibleProducts((prev) => prev + 4); // Load 4 more products on click
  // };
 
  const loadMoreProducts = () => {
    setIsLoading(true); // 🔄 Loading start

    setTimeout(() => {
      setVisibleProducts((prev) => prev + 4); // 4 aur products load karega
      setIsLoading(false); // ✅ Loading complete
    }, 1500); // 1.5 sec ka delay (API call jaisa effect)
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-2">
    {/* <h1> Tausif</h1> */}
      {filteredProducts.length > 0 ? (
        filteredProducts
          .slice(0, visibleProducts)
          .map((item) => (
            <Product
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              cart={cart}
            />
          ))
      ) : (
        <p>No products found</p>
      )}
      {/* <h1>Product List</h1> Added heading for the product list */}
    

      {visibleProducts < filteredProducts.length && (
        // Agar visibleProducts, filteredProducts.length se chhota hai
        // To "Load More" button dikhayega, warna nahi dikhayega
        <div className="flex justify-center mt-6">
          {isLoading ? (
            <p className="text-blue-600 font-semibold">Loading...</p> // 🔄 Loading Text
          ) : (
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              onClick={loadMoreProducts}
            >
              Load more
            </button>
          )}
        </div>
      )}


    </div>
  );
});

export default Products;
