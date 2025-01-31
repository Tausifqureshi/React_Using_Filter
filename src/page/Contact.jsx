


import React from "react";
import { useProductContext } from "../components/Context API/ProductProvider"; // Ensure correct import

function Contact() {
  const {key}= useProductContext(); // ✅ Ensure context is used properly

  return <div>Contact {key}</div>;
}

export default Contact;
