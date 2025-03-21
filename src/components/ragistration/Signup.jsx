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
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState("");
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
   if (formData.fullName.trim() === "" || formData.email.trim() === "" || formData.password.trim() === "" ) {
    // ("Please fill in all the fields.");
     setErrors("Please fill in all the fields.")
   }
  }

  function handlePasswordToggle(){
    setShowPassword(!showPassword);
  }

  function handleTermsChange(){
    setTermsAccepted(!termsAccepted);
  }

  



  
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg my-5">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors && <p className="text-red-500">{errors}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
             {errors && <p className="text-red-500">{errors}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
             {errors && <p className="text-red-500">{errors}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Signup
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
