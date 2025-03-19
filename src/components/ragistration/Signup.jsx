import React from "react";

function Signup() {
  function handleChange(event) {
    console.log(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
        
          <div className="">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              onChange={handleChange}
              // required
            />
          </div>

          <div className="">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              // required
            />
          </div>

          <div className="">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              // required
            />
          </div>

          <div className="">
            <button type="submit">Signup</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
