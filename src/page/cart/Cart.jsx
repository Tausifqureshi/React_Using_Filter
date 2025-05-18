// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity, } from "../../Redux/productSlice";

// const Cart = () => {
//   console.log("Cart Component Rendered");
//   const getlocalCart = JSON.parse(localStorage.getItem("cart"));
//   const cart = useSelector((state) => state.product.cart);
//   console.log("Cart State:", cart);
//   const dispatch = useDispatch();

//   // ✅ Debugging: Redux state change hone ke baad console karega
//   useEffect(() => {
//     console.log("Cart State After Mount:", cart);
//   }, [cart]); // 🔥 Runs every time cart changes

//   return (
//     <div>
//       <h2>Cart Length: {cart.length}</h2>
//       <button onClick={() => dispatch(clearCart())}>Clear Cart</button>

//       {cart.map((item) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//           <p>Quantity: {item.quantity}</p>
//           <button onClick={() => dispatch(incrementQuantity(item.id))}>
//             Increment Quantity
//           </button>
//           <button onClick={() => dispatch(decrementQuantity(item.id))}>
//             Decrement Quantity
//           </button>
//           <img src={item.images[0]} alt={item.title} />
//           <button onClick={() => dispatch(removeFromCart(item.id))}>
//             Remove
//           </button> 
//           <br /> <br />
          
//         </div>  
//       ))}
//     </div>
//   );
// };

// export default Cart;











  

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {  removeFromCart, clearCart, incrementQuantity, decrementQuantity } from "../../Redux/productSlice";

const Cart = () => {
  console.log("Cart Component Rendered");
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Cart State After Mount:", cart);
  }, [cart]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Shopping Cart ({cart.length} items)</h2>
      <button 
        onClick={() => dispatch(clearCart())} 
        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 mb-6"
      >
        Clear Cart
      </button>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <img src={item.images[0]} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <div className="flex gap-2 mt-2">
                <button 
                  onClick={() => dispatch(incrementQuantity(item.id))} 
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                >
                  +
                </button>
                <button 
                  onClick={() => dispatch(decrementQuantity(item.id))} 
                  className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-400"
                >
                  -
                </button>
              </div>
            </div>
            <button 
              onClick={() => dispatch(removeFromCart(item.id))} 
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
