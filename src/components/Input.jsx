import React from "react";
 
function Input({type, value, ...props }) {
  return( 
   <div className="p-5 m-3 bg-yellow-500"> 
    <label className="text-white font-bold">
    <input type={type} value={value}
     style={type === "radio" || type === "checkbox" ? { accentColor: color } : {}} //Agar type "radio" ya "checkbox" hoga, toh { accentColor: color } style apply hoga. Agar input type kuch aur hoga (jaise "text" ya "password"), toh {} empty style apply hoga (koi effect nahi hoga).

    // 2. accentColor Property:
   // Yeh CSS property hai jo radio button aur checkbox ka color change karti hai.
   // Default color blue hota hai, lekin accentColor se hum isse custom color de sakte hain.

     {...props} // Spread operator: Baaki saare props yahan automatically apply ho jayenge
    />  
    {type === "radio" || type === "checkbox" ? <span>{props.placeholder}</span> : null}
     {/* Agar type "radio" ya "checkbox" hoga, toh <span>{props.placeholder}</span> show karna hai.
     type === "radio" || type === "checkbox" → Yeh check karta hai ki input radio ya checkbox hai ya nahi.
     Agar condition true hoti hai → <span>{placeholder}</span> render hoga.
     Agar false hoti hai → null return hoga, yani kuch bhi render nahi hoga.
     
     */}
    </label>
   </div>
  
   );
}

export default Input;

