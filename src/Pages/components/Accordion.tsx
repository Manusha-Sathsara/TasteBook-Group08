import React, { useState } from "react";
import { CgChevronDown } from "react-icons/cg";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 text-white font-semibold hover:bg-gray-800 transition duration-300"
      >
        {question}
        <CgChevronDown
          size={22}
          className={`text-[#00df9a] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 p-4 text-gray-400" : "max-h-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default Accordion;
