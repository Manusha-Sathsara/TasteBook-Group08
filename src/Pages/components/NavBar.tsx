import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";

const NavBar = () => {
  const [nav, setNav] = useState(true);
  const handleNavToggle = () => setNav(!nav);
  return (
    <>
      <div className="text-white flex justify-between items-center h-17 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">TASTEBOOK</h1>
        <ul className="hidden md:flex font-medium ">
          <li className="p-4">Home</li>
          <li className="p-4">Category</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
          <li className="p-4">Login</li>
        </ul>
        <div onClick={handleNavToggle} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose size={30} className="ease-in-out duration-500" />
          ) : (
            <AiOutlineMenu size={30} className="ease-in-out duration-500" />
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
            <li className="p-4  border-b border-gray-600">Category</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
            <li className="p-4  hover:bg-white hover:text-black">Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
