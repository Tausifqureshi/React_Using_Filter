// import React from "react";

// function Signup() {
//   function handleChange(event) {
//     console.log(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }
//   return (
//     <>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         {/* <div className="flex flex-col items-center justify-center"> */}
//         <div className="">
        
//           <div className="">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full name"
//               onChange={handleChange}
//               // required
//             />
//           </div>

//           <div className="">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={handleChange}
//               // required
//             />
//           </div>

//           <div className="">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               // required
//             />
//           </div>

//           <div className="">
//             <button type="submit">Signup</button>
//           </div>
//         </div>
//       </form>
//     </>
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
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);

  function handleChange(e) {
    console.log(e.target.value);
    // const { name, value } = event.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handlePasswordToggle(){
    setShowPassword(!showPassword);
  }

  function handleTermsChange(){
    setTermsAccepted(!termsAccepted);
  }
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
  
  // return (
  //   <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //     <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
  //       <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Signup</h2>
  //       <form onSubmit={handleSubmit} className="space-y-4">
  //         <div>
  //           <input
  //             type="text"
  //             name="name"
  //             placeholder="Full name"
  //             onChange={handleChange}
  //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
  //           />
  //         </div>
  //         <div>
  //           <input
  //             type="email"
  //             name="email"
  //             placeholder="Email"
  //             onChange={handleChange}
  //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
  //           />
  //         </div>
  //         <div>
  //           <input
  //             type="password"
  //             name="password"
  //             placeholder="Password"
  //             onChange={handleChange}
  //             className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
  //         >
  //           Signup
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );
}



export default Signup;
