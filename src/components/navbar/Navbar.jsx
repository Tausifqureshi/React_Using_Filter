import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Login", slug: "/login" },
    { name: "Signup", slug: "/signup" },
    { name: "All Posts", slug: "/all-posts" },
    { name: "Add Post", slug: "/add-post" },
  ];
  return (
    <nav>
      <ul className="flex list-none gap-4">
        {navItems.map((item) => (
          <li key={item.slug}>
            <NavLink
              to={item.slug}
              className={({ isActive }) =>
                `text-blue-500 no-underline ${
                  isActive ? "font-bold border-b-2 border-blue-500" : "hover:text-blue-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
