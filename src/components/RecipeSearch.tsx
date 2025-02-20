import React from "react";
import { CgSearch } from "react-icons/cg";

const RecipeSearch = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center mt-4  relative z-10 w-full max-w-[400px] mx-auto">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full p-3 pl-5 pr-10 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:border-[#00df9a] transition duration-300"
        />
        <CgSearch
          className="absolute right-3 text-gray-400 cursor-pointer hover:text-[#00df9a] transition duration-300"
          size={20}
        />
      </div>
    </div>
  );
};

export default RecipeSearch;
