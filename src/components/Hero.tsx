import React from "react";
import { ReactTyped } from "react-typed";
import { CgSearch } from "react-icons/cg";
import RecipeSearch from "./RecipeSearch";
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto  text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2 md:text-2xl ">
          Unlock the Secrets of
        </p>
        <h1 className=" font-bold p-2 md:text-7xl sm:text-6xl text-4xl md:py-6">
          Great Cooking
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-1 sm:py-3 md:py-4">
            Your Destination for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-400 pl-2 md:pl-4"
            strings={[" Recipes", " Dishes", " Cooking tips", " Live help"]}
            loop
            typeSpeed={120}
            backSpeed={120}
          ></ReactTyped>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <RecipeSearch />
        <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
