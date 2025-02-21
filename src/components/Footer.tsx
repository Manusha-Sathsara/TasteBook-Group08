import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";

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
          <a
            href="https:\\www.facebook.com"
            target="_blank"
            className="hover:text-[#00df9a] transition-colors duration-300"
          >
            <FaFacebookSquare size={30} />
          </a>
          <a
            href="https:\\www.github.com"
            target="_blank"
            className="hover:text-[#00df9a] transition-colors duration-800"
          >
            <FaGithubSquare size={30} />
          </a>
          <a
            href="https:\\www.instagram.com"
            target="_blank"
            className="hover:text-[#00df9a] transition-colors duration-300"
          >
            <FaInstagramSquare size={30} />
          </a>
          <a
            href="https:\\www.x.com"
            target="_blank"
            className="hover:text-[#00df9a] transition-colors duration-300"
          >
            <FaTwitterSquare size={30} />
          </a>
          <a
            href="https:\\www.youtube.com"
            target="_blank"
            className="hover:text-[#00df9a] transition-colors duration-300"
          >
            {" "}
            <FaYoutubeSquare size={30} />
          </a>
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
            <Link to="/qa">
              <li className="py-2 text-sm">FAQs</li>
            </Link>
            <Link to="/help">
              <li className="py-2 text-sm">Help Center</li>
            </Link>
            <Link to="/privacypolicy">
              <li className="py-2 text-sm">Privacy Policy</li>
            </Link>
            <Link to="/termsofservice">
              {" "}
              <li className="py-2 text-sm">Terms of Service</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
