import React from "react";

function Input({ handleChange, value, title, name, className = "" ,...props}) {
  return<label>
    <input
    type="checkbox"
    name={name}
    value={value}
    onChange={handleChange}
    className={className}
    {...props}
    />
    {title}
  </label>
}

export default Input;

