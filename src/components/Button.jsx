import React from "react";

function Button({ label, onClick, type = "button"}) {
  return <div>
 
  <button onClick={onClick} type={type} className="bg-blue-500 text-white px-4 py-2  mt-2 rounded">
    {label}
  </button>
  </div>;
}

export default Button;
