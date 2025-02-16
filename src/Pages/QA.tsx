import React from "react";
import Accordion from "./components/Accordion";

const QA = () => {
  const faqs = [
    {
      question: "What is TasteBook?",
      answer:
        "TasteBook is your go-to platform for discovering delicious recipes and cooking tips.",
    },
    {
      question: "Is TasteBook free to use?",
      answer: "Yes! You can access all recipes and cooking guides for free.",
    },
    {
      question: "Can I submit my own recipes?",
      answer:
        "Absolutely! Share your favorite dishes with the TasteBook community.",
    },
    {
      question: "Do I need an account to access recipes?",
      answer:
        "No, but an account lets you save recipes and engage with the community.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 text-white text-center">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-8">
        Find answers to common questions about TasteBook.
      </p>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center mt-8 relative w-full max-w-[400px] mx-auto">
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full p-3 pl-5 pr-10 bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:border-[#00df9a] transition duration-300"
        />
      </div>
    </div>
  );
};

export default QA;
