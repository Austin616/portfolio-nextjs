"use client";

import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si"; // Import GitHub and LinkedIn icons

export const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/austin616",
    icon: <SiGithub className="text-2xl" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/austin-tran-57624a284/",
    icon: <SiLinkedin className="text-2xl" />,
  },
];

export const navLinks = [
  {
    title: "home",
    href: "/#",
  },
  {
    title: "about",
    href: "/#about",
  },
  {
    title: "skills",
    href: "/#skills",
  },
  {
    title: "contact",
    href: "/#contact",
  },
] as const;

const Navbar: React.FC = () => {
  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.split("#")[1]; // Get the ID part after the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else if (href === "/#") {
      // If the home link is clicked, scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top section with logo, nav links, and social links */}
      <div className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 backdrop-blur --background: #0f0f0f; bg-opacity-80 z-50">
        {/* Logo section */}
        <div className="flex items-center justify-start">
          <Link
            className="text-4xl font-bold text-white hover:text-gray-400"
            href={"/"}
          >
            at
          </Link>
        </div>

        {/* Nav links centered */}
        <div className="flex items-center justify-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className="text-white hover:text-gray-400"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Social links aligned to the right */}
        <div className="flex items-center justify-end space-x-6">
          {socialLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-white hover:text-gray-400">
                {link.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>
      {/* Spacer to prevent content from being hidden behind the navbar */}
      <div className="h-14"></div>
    </>
  );
};

export default Navbar;
