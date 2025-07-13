import React from "react";
import { useProductContext } from "../components/Context API/ProductProvider"; // Ensure correct import

function Contact() {
  // console.log("Contact Component Rendered");

  const { key } = useProductContext(); // ✅ Ensure context is used properly

  return <div>Contact {key}</div>;
}

export default Contact;
