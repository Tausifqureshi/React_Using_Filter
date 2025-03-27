import React, { useState, useEffect } from "react";
import Input from "../../Input"; // Custom Input component
import { useProductContext } from "../../Context API/ProductProvider"; // Context API se data access kar rahe hain

function Category({ isSidebarOpen }) {
  // 1. selected categories store karne ke liye state
  const { data, setFilteredProducts } = useProductContext(); // Context API se products aur filteredProducts ka access
  const [selectedCategories, setSelectedCategories] = useState([]); // initially empty array

  // 2. unique categories list banane ke liye
  const categories = [...new Set(data.map((item) => item.category))];

  // 3. Jab user category select ya deselect karega toh yeh function chalega
  function handleChange(e) {
    const value = e.target.value; // jo category select hui uska value
    setSelectedCategories(
      (prevSelectedCategories) =>
        prevSelectedCategories.includes(value)
          ? prevSelectedCategories.filter((c) => c !== value) // agar already select hai toh remove karo
          : [...prevSelectedCategories, value] // nahi hai toh add karo
    );

    // ❌ Yaha problem: state abhi turant update nahi hoti
    // Jab tum setSelectedCategories call karte ho, React state ko asynchronously update karta hai.
    // Matlab, state abhi turant change nahi hoti, balki thoda time lagta hai.
    // Agar tum yahi par selectedCategories ka use kar ke filter lagaoge toh wo purane state par chalega.
    console.log("Selected Categories after change:", selectedCategories);
    // Yeh log dikhayega ki selectedCategories ka value turant update nahi hua
  }

  // 4. useEffect ka use kar rahe hain taaki selectedCategories update hone ke baad filter lage
  useEffect(() => {
    // ✅ Yeh solution hai: useEffect tabhi chalega jab selectedCategories update ho jayega
    // Iska matlab hai ki yaha hamesha naya updated selectedCategories milega

    if (selectedCategories.length > 0) {
      // 5. Agar koi category select hui hai toh filter lagao
      const filteredProducts = data.filter(
        (product) => selectedCategories.includes(product.category) // product category check kar rahe hain
      );
      setFilteredProducts(filteredProducts); // Filtered list set karo
    } else {
      // 6. Agar koi category select nahi hui toh sabhi products dikhao
      setFilteredProducts(data);
    }
  }, [selectedCategories, data, setFilteredProducts]);
  // Yeh effect sirf tab chalega jab selectedCategories ya data change hoga

  return (
    <div className="flex flex-col">
      <h3>Filter by Category:</h3>
      {/* 7. Har category ke liye ek Input component dikhayenge */}
      {categories.map((category) => (
        <Input
          key={category}
          value={category}
          isSidebarOpen={isSidebarOpen}
          handleChange={handleChange} // handleChange function pass kar rahe hain
        />
      ))}
    </div>
  );
}

// export default Categor










// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setUsers, setCurrentUser } from "./authSlice";
// import { useNavigate } from "react-router-dom";

// const Auth = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [isSignup, setIsSignup] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const users = useSelector((state) => state.auth.users);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isSignup) {
//       // 🔥 Signup Logic in Component
//       if (users.find((u) => u.email === formData.email)) {
//         alert("User already exists!");
//         return;
//       }

//       const updatedUsers = [...users, formData];
//       dispatch(setUsers(updatedUsers));
//       alert("Signup successful! You can now login.");
//       setIsSignup(false);          
//     } else {
//       // 🔥 Login Logic in Component
//       const user = users.find(
//         (u) => u.email === formData.email && u.password === formData.password
//       );

//       if (user) {
//         dispatch(setCurrentUser(user));
//         navigate("/dashboard");
//       } else {
//         alert("Invalid email or password!");
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>{isSignup ? "Signup" : "Login"}</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">{isSignup ? "Signup" : "Login"}</button>
//       </form>
//       <button onClick={() => setIsSignup(!isSignup)}>
//         {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
//       </button>
//     </div>
//   );
// };

// export default Auth;

































