// // import React from "react";

// // function Signup() {
// //   function handleChange(event) {
// //     console.log(event.target.value);
// //   }

// //   function handleSubmit(event) {
// //     event.preventDefault();
// //   }
// //   return (
// //     <>
// //       <h2>Signup</h2>
// //       <form onSubmit={handleSubmit}>
// //         {/* <div className="flex flex-col items-center justify-center"> */}
// //         <div className="">
        
// //           <div className="">
// //             <input
// //               type="text"
// //               name="name"
// //               placeholder="Full name"
// //               onChange={handleChange}
// //               // required
// //             />
// //           </div>

// //           <div className="">
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email"
// //               onChange={handleChange}
// //               // required
// //             />
// //           </div>

// //           <div className="">
// //             <input
// //               type="password"
// //               name="password"
// //               placeholder="Password"
// //               onChange={handleChange}
// //               // required
// //             />
// //           </div>

// //           <div className="">
// //             <button type="submit">Signup</button>
// //           </div>
// //         </div>
// //       </form>
// //     </>
// //   );
// // }

// // export default Signup;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Signup() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [termsAccepted, setTermsAccepted] = useState(false);

//   function handleChange(e) {
//     console.log(e.target.value);
//     // const { name, value } = event.target;
//     // setFormData((prevData) => ({
//     //   ...prevData,
//     //   [name]: value,
//     // }));
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     let newErrors = {};
//    if (formData.fullName.trim() === "" || formData.email.trim() === "" || formData.password.trim() === "" ) {
//     // ("Please fill in all the fields.");
//     //  setErrors({"Please fill in all the fields."})
//     newErrors.fullName = "Please fill in all the fields.";
//     newErrors.email = "Please fill in all the fields.";
//     newErrors.password = "Please fill in all the fields.";
//     setErrors(newErrors);
//    } 
//     else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters long.";
//       setErrors(newErrors);
//     }
//     else if (!formData.email.includes("@")) {
//       newErrors.email = "Invalid email format.";
//       setErrors(newErrors);
//     }
//     else if (!formData.email.includes(".com")) {
//       newErrors.email = "Invalid email format.";
//       setErrors(newErrors);
//     }
//     else {
//       setLoading(true);
//       // send the form data to the server
//       // handle the response
//       setLoading(false);
//     }

//      return Object.keys(errors).length === 0;
//   }

//   // function handlePasswordToggle(){
//   //   setShowPassword(!showPassword);
//   // }

//   // function handleTermsChange(){
//   //   setTermsAccepted(!termsAccepted);
//   // }

  



  
//   return (
//     <div className="flex items-center justify-center  bg-gray-100">
//       <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg my-5">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Signup</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full name"
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//             {errors && <p className="text-red-500">{errors}</p>}
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//              {errors && <p className="text-red-500">{errors}</p>}
//           </div>
//           <div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//              {errors && <p className="text-red-500">{errors}</p>}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Signup
//           </button>
//         </form>
//         <div className='text-center mt-4'>
//           <h2 className='text-gray-600'>
//             Already have an account? 
//             <Link className='text-blue-600 font-semibold hover:underline' to={'/login'}> Log In</Link>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }



// export default Signup;






















import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format.";
      }
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) { //koi error nai hoi to signup hoga.
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert("Signup successful!");
        setFormData({
          fullName: "",
          email: "",
          password: "",
        })
      }, 1000);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50"
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <div className='text-center mt-4'>
          <h2 className='text-gray-600'>
            Already have an account? 
            <Link className='text-blue-600 font-semibold hover:underline' to={'/login'}> Log In</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
