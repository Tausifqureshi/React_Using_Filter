import React from "react";

function ProtectedRoute({ children }) {
  return (
    <>
      <h1>ProtectedRoute</h1>
      {children}
    </>
  );
}                                 


export default ProtectedRoute;
