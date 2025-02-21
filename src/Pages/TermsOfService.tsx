import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-gray-400 mb-6">Last Updated: February 16, 2025</p>

      <p className="text-gray-300 mb-4">
        By accessing and using TasteBook, you agree to the following terms and
        conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Use of Our Services
      </h2>
      <ul className="text-gray-300 list-disc pl-6 mb-4">
        <li>You must be at least 13 years old to use our platform.</li>
        <li>Do not use our services for illegal activities.</li>
        <li>Respect other users and their content.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. User-Generated Content
      </h2>
      <p className="text-gray-300 mb-4">
        Users are responsible for any content they post. We reserve the right to
        remove inappropriate content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Intellectual Property
      </h2>
      <p className="text-gray-300 mb-4">
        All trademarks, logos, and content on this site belong to TasteBook or
        respective owners.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes to Terms</h2>
      <p className="text-gray-300 mb-4">
        We may update these terms at any time. Continued use of our site means
        you accept the updated terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact Us</h2>
      <p className="text-gray-300">
        If you have any questions, contact us at{" "}
        <span className="text-[#00df9a]">support@tastebook.com</span>.
      </p>
    </div>
  );
};

export default TermsOfService;
