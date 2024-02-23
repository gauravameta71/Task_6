// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-white py-8 text-center w-full h-full">
      <div>
        {/* Anarock logo or image */}
        <img
          src="/assets/logo.png"
          alt="Anarock Logo"
          className="mx-auto mb-4"
          style={{ maxWidth: "100px" }} // Adjust the max width as needed
        />
      </div>
      <p className="text-black text-2xl">
        Anarock Property Consultants Private Limited,
        MAHARERA registration no. A51900000108.
      </p>
    </footer>
  );
};

export default Footer;
