import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">TASTEBOOK</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
          iste.
        </p>
        <div className="flex justify-center gap-4 max-w-[75%} my-6 lg:justify-around">
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Services</h6>
          <ul>
            <li className="py-2 text-sm">Recipes</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Tips & Tricks</li>
            <li className="py-2 text-sm">Live Help</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Careers</li>
            <li className="py-2 text-sm">Contact</li>
            <li className="py-2 text-sm">Press</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">FAQs</li>
            <li className="py-2 text-sm">Help Center</li>
            <li className="py-2 text-sm">Privacy Policy</li>
            <li className="py-2 text-sm">Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
