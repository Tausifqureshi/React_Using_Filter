// import React from "react";

// function Cart() {
//   return <div>Card</div>;
// }

// export default Cart;

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart, removeFromCart, clearCart } from "../../Redux/productSlice";

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  // ✅ Debugging: Redux state change hone ke baad console karega
  useEffect(() => {
    console.log("Cart State After Mount:", cart);
  }, [cart]); // 🔥 Runs every time cart changes

  return (
    <div>
      <h2>Cart Length: {cart.length}</h2>
      {/*  */}

      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
