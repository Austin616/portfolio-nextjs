"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left text-gray-400">
          <p className="text-lg font-semibold">Austin Tran</p>
          <p className="text-sm cursor-pointer hover:text-white" onClick={() => window.open("mailto:austintran616@gmail.com")}> austintran616@gmail.com</p>
        </div>
        <a
          href="#"
          className="border-radius-3 border border-white p-2 text-sm hover:bg-white hover:text-black transition-colors"
        >
          Back to Top
        </a>
      </div>
      <div className="w-[90%] border-t border-white mt-4 pt-4 mx-auto text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Austin Tran. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
