// import React from "react";
// import Button from "../Button";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function Product({ images, title, price,id,availabilityStatus,meta,stock,shippingInformation,returnPolicy,brand,handleAddToCart, cart,}) {
//   console.log("Product Component Rendered!")
  
//   const navigate = useNavigate();
//   const addToCartHandler = () => {
//     const existingProduct = cart.find((item) => item.id === id);
//     if (existingProduct) {
//       toast.info("Product already added", {
//         autoClose: 1500, // 300ms me close ho jayega
//         position: "top-right",
//         hideProgressBar: false, // Progress bar chhupane ke liye
//         pauseOnHover: true,
//         theme: "light",
//         style: {
//           background: "#333",
//           color: "#fff",
//           borderRadius: "5px",
//           fontSize: "14px",
//           fontWeight: "bold",
//           textAlign: "center",
//           padding: "10px",
//           marginTop: "10px",
//           marginRight: "10px",
//           boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
//         },
//       });
      

//     } else {
//       const productToAdd = {
//         id,
//         images,
//         title,
//         price,
//         availabilityStatus,
//         meta,
//         stock,
//         shippingInformation,
//         returnPolicy,
//         brand,
//         quantity: 1,
//       };
//       handleAddToCart(productToAdd);
//     }
//   };

//   return (
//     <div className="border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden">
//       <div
//         className="w-full bg-gray-100 cursor-pointer"
//         style={{ aspectRatio: "4/3" }}
//         onClick={() => navigate(`/productsInfo/${id}`)}
//       >
//         <img
//           src={images[0]}
//           alt={title}
//           className={`w-full h-full object-contain mix-blend-darken py-3 px-1`}
//         />
//       </div>

//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors truncate">
//           {title}
//         </h3>

//         <p className="text-xl font-bold text-green-600 mt-2">${price}</p>
//         <p className="text-xl font-bold text-green-600 mt-2">
//           {availabilityStatus}
//         </p>
//         <h4 className="text-xl font-bold text-green-600 mt-2">
//           {" "}
//           Availabal {stock}
//         </h4>
//         {/* <p className="text-xl font-bold text-green-600 mt-2">{shippingInformation }</p> */}
//         {/* <p className="text-xl font-bold text-green-600 mt-2">{returnPolicy}</p> */}
//         {/* <p className="text-xl font-bold text-green-600 mt-2">{brand}</p> */}
//         {/* <img
//             src={meta.qrCode}
//             alt={title}
//             className={`w-full h-full object-contain mix-blend-darken py-3 px-1` }
//           /> */}

//         <Button
//           className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-full mt-4 w-full transition-all duration-300"
//           onClick={addToCartHandler}
//         >
//           Add to Cart
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Product;




import React, { memo, useCallback } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Product({ images, title, price, id, handleAddToCart, cart }) {
  console.log("Product Component Rendered!");

  const navigate = useNavigate();

  // ✅ Optimize `handleAddToCart` using useCallback
  const addToCartHandler = useCallback(() => {
    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct) {
      toast.info("Product already added", { autoClose: 1500, position: "top-right" });
    } else {
      const productToAdd = { id, images, title, price, quantity: 1 };
      handleAddToCart(productToAdd);
    }
  }, [cart, id, images, title, price, handleAddToCart]); // ✅ Dependencies me sirf required values rakhni hai.

  return (
    <div className="border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden">
      <div
        className="w-full bg-gray-100 cursor-pointer"
        style={{ aspectRatio: "4/3" }}
        onClick={() => navigate(`/productsInfo/${id}`)}
      >
        <img src={images[0]} alt={title} className="w-full h-full object-contain py-3 px-1" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-xl font-bold text-green-600 mt-2">${price}</p>
        <Button onClick={addToCartHandler}>Add to Cart</Button>
      </div>
    </div>
  );
}

// ✅ Memoizing Product Component
export default memo(Product);
