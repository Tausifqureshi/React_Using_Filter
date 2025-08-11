export const validateEmail = (email) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

export const validatePassword = (password) => {
  // return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
  return password.length >= 8; // Password minimum 8 characters ka hona chahiye
};
     
  
  // {isMenuOpen && (
  //       <div className="md:hidden w-full bg-white shadow-md mt-2 rounded-md">
  //         {/* Mobile Search Bar */}
  //         <div className="px-4 py-2 border-b border-gray-200">
  //           <SearchBar />
  //         </div>

  //         {/* Mobile Nav Links */}
  //         <ul className="flex flex-col items-center space-y-4 py-4">
  //           {navItem.map((item) => (
  //             <li
  //               key={item.URL}
  //               className="w-full text-center py-2 hover:bg-gray-100"
  //             >
  //               <NavLink
  //                 to={item.URL}
  //                 onClick={() => setIsMenuOpen(false)} // Close menu on click
  //                 className="block text-gray-700"
  //               >
  //                 {item.name}
  //               </NavLink>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     )}