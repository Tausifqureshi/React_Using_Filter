import React from "react";

function Button({
  children,
  label,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  // console.log("Button Component Rendered");

  return (
    <button
      onClick={onClick}
      type={type}
      className={` font-medium ${className}`}
      {...props}
    >
      {children || label}
    </button>
  );
}

export default Button;
