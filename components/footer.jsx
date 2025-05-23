"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-2 px-2">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold leading-snug">
          Have a project in mind? <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Let's build something together!
          </span>
        </h2>
        <p className="text-sm text-gray-400 pt-4">Made with ❤️ by Hemax</p>
      </div>
    </footer>
  );
};

export default Footer;
