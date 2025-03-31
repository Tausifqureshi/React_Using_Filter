import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart, removeFromCart, clearCart, incrementQuantity } from "../../Redux/productSlice";

const Cart = () => {
  console.log("Cart Component Rendered");
  const getlocalCart = JSON.parse(localStorage.getItem("cart"));
  const cart = useSelector((state) => state.product.cart);
  console.log("Cart State:", cart);
  const dispatch = useDispatch();

  // ✅ Debugging: Redux state change hone ke baad console karega
  useEffect(() => {
    console.log("Cart State After Mount:", cart);
  }, [cart]); // 🔥 Runs every time cart changes

  return (
    <div>
      <h2>Cart Length: {cart.length}</h2>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(item.id))}>
            Increment Quantity
          </button>
          <img src={item.images[0]} alt={item.title} />
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button> 
          <br /> <br />
          
        </div>  
      ))}
    </div>
  );
};

export default Cart;
// SyncCartWithLocalStorage
