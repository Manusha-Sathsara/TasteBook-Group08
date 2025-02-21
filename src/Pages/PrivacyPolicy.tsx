import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-400 mb-6">Last Updated: February 16, 2025</p>

      <p className="text-gray-300 mb-4">
        Welcome to TasteBook! Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your personal data when
        you use our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <ul className="text-gray-300 list-disc pl-6 mb-4">
        <li>Personal Information (e.g., name, email)</li>
        <li>Usage Data (e.g., browsing behavior, preferences)</li>
        <li>Cookies and tracking technologies</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <ul className="text-gray-300 list-disc pl-6 mb-4">
        <li>To provide and improve our services</li>
        <li>To send updates and promotional content</li>
        <li>To analyze website usage and trends</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="text-gray-300 mb-4">
        We take appropriate security measures to protect your data from
        unauthorized access, disclosure, or misuse.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact Us</h2>
      <p className="text-gray-300 mb-4">
        If you have any questions, feel free to contact us at{" "}
        <span className="text-[#00df9a]">support@tastebook.com</span>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
