import React, { useState } from "react";
import { CgChevronDown } from "react-icons/cg";

interface AccordProps {
  question: string;
  answer: string;
}

const Accord: React.FC<AccordProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-800 rounded-md p-4">
      {/* Question Button */}
      <button
        className="w-full flex justify-between items-center text-left text-white font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <CgChevronDown
          size={20}
          className={`text-[#00df9a] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Answer Section */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 p-2 text-gray-400" : "max-h-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default Accord;
