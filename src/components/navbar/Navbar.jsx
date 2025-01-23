// import React, { useState, useEffect } from "react";
// import { FaCarTunnel } from "react-icons/fa6";

// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   // Scroll handler to update the state
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const navItem = [
//     { name: "Home", URL: "/" },
//     { name: "About", URL: "/about" },
//     { name: "Contact", URL: "/contact" },
//     { name: "Signup", URL: "/signup" },
//     { name: "Login", URL: "/login" },
//     // {name: "Logout", URL: "/logout"},
//     { name: "Cart", URL: "/cart" },
//   ];
//   return (
//     <div className="p-4 bg-gray-100 shadow-md sticky top-0 z-50 transition duration-500">
//       <nav className="flex justify-between items-center">
//         <div>
//           {/* Logo  */}
//         </div>

//           <ul className="flex gap-4 items-center">
//           {navItem.map((item) => (
//             <li key={item.URL} className=" hover:bg-blue-100 cursor-pointer px-2 py-2">
//               {item.name}
//             </li>
//           ))}

//           </ul>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;





















import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false); //isScrolled: Page scroll hone ki condition ko track karta hai.
  // const [lastScrollY, setLastScrollY] = useState(0); //lastScrollY: Pichli scroll position ko store karta hai, jisse scroll direction detect ho sake.

  // const [isVisible, setIsVisible] = useState(true); //isVisible: Navbar ki visibility ko control karta hai (visible ya hidden).

  useEffect(() => { 
    // Scroll handler jo scroll direction ke basis par state update karega
  
    const handleScroll = () => {
      // Agar scroll position 50px se zyada hai to isScrolled ko true set karo
      // setIsScrolled(window.scrollY > 50);
  
      // // Scroll direction ko detect karo
      // // 1. Agar window.scrollY (current scroll position) > lastScrollY (previous scroll position) 
      // //    to iska matlab hai ki user neeche scroll kar raha hai
      // // 2. Agar window.scrollY > 50, iska matlab hai user 50px se zyada scroll kar chuka hai
      // if (window.scrollY > lastScrollY && window.scrollY > 50) { 
      //   // Agar user neeche scroll kar raha hai aur 50px se zyada scroll kar chuka hai, to navbar ko hide karo false se.
      //   setIsVisible(false);
      // } else {
      //   // Agar upar scroll kar rahe ho ya top par ho to navbar ko show karo
      //   setIsVisible(true);
      // }
  
      // // Last scroll position ko update karo
      // setLastScrollY(window.scrollY);



      if(window.scrollY>50){
       setIsScrolled(true);
      }else{
      setIsScrolled(false);
      }
    };
  
    // Scroll event listener ko add karo
    window.addEventListener("scroll", handleScroll);
  
    // Cleanup function jo component ke unmount hone par event listener ko remove karega
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // }, [lastScrollY]);  // lastScrollY ko dependency ke roop me pass kiya gaya hai
  }, []);  // lastScrollY ko dependency ke roop me pass kiya gaya hai
  
  const navItem = [
    { name: "Home", URL: "home" },
    { name: "About", URL: "/about" },
    { name: "Contact", URL: "/contact" },
    { name: "Signup", URL: "/signup" },
    { name: "Login", URL: "/login" },
    { name: "Cart", URL: "/cart" },
  ];

  return (
    <div
      className={`p-4 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md bg-opacity-95" : "bg-gray-100"
      } 
      `
      // ${!isVisible ? "-translate-y-full" : ""}
      }
    >
      <nav className="flex justify-between items-center">
        <div>
          {/* Logo */}
        </div>

        <ul className="flex gap-4 items-center">
          {navItem.map((item) => (
            <li key={item.URL} className="hover:bg-blue-100 cursor-pointer px-2 py-2">
              <NavLink to={item.URL}>{item.name}</NavLink>
            </li>
           
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
{/* <li
key={item.URL}
className="hover:bg-blue-100 cursor-pointer px-2 py-2"
>
{item.name}
</li> */}