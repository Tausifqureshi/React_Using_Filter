import { useEffect } from "react";
import { useSelector } from "react-redux";

const SyncCartWithLocalStorage = () => {
  const cart = useSelector((state) => state.product.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); // ✅ Jab bhi cart update hoga, tabhi localStorage update hoga

  return null; // ⚡ Ye component UI me kuch nahi dikhayega
};

export default SyncCartWithLocalStorage;
