import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router";
import "./NavBar.css";
const NavBar = () => {
  const [nav, setNav] = useState(true);
  const handleNavToggle = () => setNav(!nav);
  return (
    <>
      <div className="text-white flex justify-between items-center h-17 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">TASTEBOOK</h1>
        <ul className="hidden md:flex font-medium ">
          <NavLink to="/">
            {" "}
            <li className="px-4 py-2 ">Home</li>
          </NavLink>
          <NavLink to="/category">
            <li className="px-4 py-2">Category</li>
          </NavLink>
          <NavLink to="/about">
            <li className="px-4 py-2">About</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="px-4 py-2">Contact</li>
          </NavLink>
          <NavLink to="/login">
            <li className="px-4 py-2">Login</li>
          </NavLink>
        </ul>
        <div onClick={handleNavToggle} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose
              size={30}
              className="ease-in-out duration-500 cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="ease-in-out duration-500 cursor-pointer "
            />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] border-r-1 border-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%] ease-in-out duration-500"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            TASTEBOOK
          </h1>
          <ul className="p-4 uppercase  ">
            <NavLink to="/">
              {" "}
              <li className="p-4 border-b border-gray-600">Home</li>
            </NavLink>
            <NavLink to="/category">
              <li className="p-4  border-b border-gray-600">Category</li>
            </NavLink>
            <NavLink to="/about">
              {" "}
              <li className="p-4 border-b border-gray-600">About</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="p-4 border-b border-gray-600">Contact</li>
            </NavLink>
            <NavLink to="/login">
              {" "}
              <li className="p-4 ">Login</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
