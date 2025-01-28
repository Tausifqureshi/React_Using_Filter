import React from "react";

function Button({
  children,
  label,
  onClick,
  type = "button",
  className,
  ...props
}) {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`bg-blue-500 text-white px-4 py-2 mt-2 rounded ${className}`}
        {...props}
      >
         {children || label}
      </button>
    </div>
  );
}

export default Button;
