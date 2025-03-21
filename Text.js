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












// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setUsers } from "./authSlice";
// import { useNavigate } from "react-router-dom";
// import { isValidEmail, isValidPassword } from "./utils"; // ✅ Import utilities

// const Signup = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const users = useSelector((state) => state.auth.users);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ✅ Validate Email & Password
//     if (!isValidEmail(formData.email)) {
//       alert("Invalid email format!");
//       return;
//     }
//     if (!isValidPassword(formData.password)) {
//       alert("Password must be at least 6 characters long!");
//       return;
//     }

//     // ✅ Check if user already exists
//     if (users.find((user) => user.email === formData.email)) {
//       alert("User already exists!");
//       return;
//     }

//     // ✅ Save new user
//     dispatch(setUsers(formData));
//     alert("Signup successful! Please login.");
//     navigate("/login");
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;



























  return (
    <div className='flex justify-center items-center h-5/6 bg-gradient-to-b from-gray-100 to-gray-300'>
      <div className='bg-white shadow-lg rounded-lg max-w-md w-full p-6 relative'>
        {/* {loading && (
          <div className='fixed inset-0 flex items-center justify-center bg-gray-50 opacity-75 z-50'>
            <Loader />
          </div>
        )} */}
        <h1 className='text-center text-gray-800 text-2xl mb-4 font-extrabold'>Create Your Account</h1>
        <form onSubmit={handleSubmit} action=''>
          <div className='mb-4'>
            <input
              type="text"
              value={formData.fullName}
              name='fullName'
              className={`border px-4 py-3 w-full rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'}`}
              placeholder='Full Name'
              onChange={handleChange}
            />
            {errors.fullName && <p className='text-red-500 text-sm mt-2'>{errors.fullName}</p>}
          </div>
          
          <div className='mb-4'>
            <input
              type="email"
              value={formData.email}
              name='email'
              className={`border px-4 py-3 w-full rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'}`}
              placeholder='Email'
              onChange={handleChange}
            />
            {errors.email && <p className='text-red-500 text-sm mt-2'>{errors.email}</p>}
          </div>
          <div className='mb-4 relative'>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              name='password'
              className={`border px-4 py-3 w-full pr-12 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'}`}
              placeholder='Password'
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className='absolute top-3 right-4 flex items-center text-gray-500'
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
            {errors.password && <p className='text-red-500 text-sm mt-2'>{errors.password}</p>}
          </div>
          <div className='mb-4 flex items-center'>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={handleTermsChange}
              className={`mr-2 ${errors.terms ? 'border-red-500' : ''}`}
            />
            <label className={`text-gray-600 ${errors.terms ? 'text-red-500' : ''}`}>
              I agree to the <a href="#" className='text-blue-600 font-semibold hover:underline'>terms and conditions</a>
            </label>
          </div>
          {errors.terms && <p className='text-red-500 text-sm mb-4'>{errors.terms}</p>}
          <div className='flex justify-center mb-4'>
            <button
              type='submit'
              className='bg-blue-600 w-full text-white font-bold py-3 rounded-lg hover:bg-blue-500 transition'
              disabled={loading}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className='text-center'>
          <h2 className='text-gray-600'>
            Already have an account? 
            <Link className='text-blue-600 font-semibold hover:underline' to={'/login'}> Log In</Link>
          </h2>
        </div>
      </div>
    </div>
  );
    