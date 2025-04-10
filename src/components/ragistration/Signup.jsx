import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail, validatePassword } from "./utils"; // ✅ Import utilities
import { signup } from "../../Redux/formSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

                              
function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.auth.user);  // ✅ Yeh sirf user array ko fetch karega

  console.log(user,"user");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    console.log(e.target.value);
    // const { name, value } = event.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newErrors = {};
       if (formData.fullName.trim() === "" || formData.email.trim() === "" || formData.password.trim() === "" ) {
        newErrors.fullName = "Please fill in all the fields.";
        newErrors.email = "Please fill in all the fields.";
        newErrors.password = "Please fill in all the fields.";
        setErrors(newErrors);
       } 

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

   
    if(user.find((user) => user.email === formData.email)){
      newErrors.email = "User already exists!";

    }

    if (Object.keys(newErrors).length > 0) { // koi error hau tu function yahi ruke dega.
      setErrors(newErrors);
      return;
    }
    else{
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        dispatch(signup(formData));
        navigate("/login");
        setFormData({
          fullName: "",
          email: "",
          password: "",
        })
      }, 1000);
    }

                            
    setErrors(newErrors);
    
    // if (Object.keys(newErrors).length === 0) { //koi error nai hoi to signup hoga.
    //   setLoading(true);
    //   setTimeout(() => {
    //     setLoading(false);
    //     dispatch(signup(formData));
    //     navigate("/login");
    //     setFormData({
    //       fullName: "",
    //       email: "",
    //       password: "",
    //     })
    //   }, 1000);
    // }
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
            {errors.email && <p className="text-red-500 text-sm ">{errors.email}</p>}
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
