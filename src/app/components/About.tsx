"use client";

import Image from "next/image";
import React from "react";
import bruh from "../images/AboutMe.jpg";
import Link from "next/link";

const About: React.FC = () => {
  // Directly reference the file in the public folder
  const resumePath = "/resume.pdf";

  return (
    <div id="about" className="flex items-center justify-center py-10 px-5">
      {/* Image Section */}
      <div className="flex-shrink-0 mr-10">
        <Image
          src={bruh}
          alt="Austin Tran"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-semibold text-white mb-6">about me</h2>
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          Hi there! I'm{" "}
          <span className="font-bold text-orange-400">Austin Tran</span>, an
          aspiring software engineer currently studying{" "}
          <span className="font-bold text-orange-400">Computer Science</span> at{" "}
          <span className="font-bold text-orange-400">
            The University of Texas at Austin
          </span>
          .
        </p>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          I’m passionate about building innovative software solutions that solve
          real-world problems. My journey in coding has been fueled by a love
          for tackling challenges and continuously learning new technologies. I
          specialize in web development, focusing on creating{" "}
          <span className="font-semibold text-blue-400">dynamic</span>,{" "}
          <span className="font-semibold text-blue-400">responsive</span>, and{" "}
          <span className="font-semibold text-blue-400">
            user-friendly interfaces
          </span>
          .
        </p>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          When I'm not coding, I enjoy lifting weights, exploring the latest in
          gaming, and spending quality time with my friends. I believe in the
          power of collaboration and creativity, and I’m always excited to
          connect with others who share a passion for technology.
        </p>
        <button className="bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-500 transition duration-300">
          <Link href="#contact">Contact</Link>
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300 ml-4"
          onClick={() => window.open(resumePath, "_blank")}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default About;
