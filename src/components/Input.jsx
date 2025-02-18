import React, { useId } from "react";

function Input({
  handleChange,
  value,
  name,
  className = "",
  category,
  isSidebarOpen,
  ...props
}) {
  console.log("Input Component Rendered");

  const id = useId();
  return (
    <ul className="space-y-2">
      <li className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
        <input
          id={id} // id aur htmlFor ka match hona zaroori hai
          type="checkbox"
          name={name}
          value={value}
          onChange={handleChange}
          className={`w-6 h-6 ${className}`}
          {...props}
        />
        <label htmlFor={id} className="cursor-pointer">
          {isSidebarOpen && `${value}`}
        </label>
      </li>
    </ul>
  );
}

export default Input;
