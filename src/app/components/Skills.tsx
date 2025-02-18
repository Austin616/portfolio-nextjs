"use client";

import React, { useState } from "react";
import {
  SiPython,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

export const programming_language = [
  {
    title: "Python",
    icon: <SiPython className="text-4xl text-yellow-400" />,
    href: "https://www.python.org/",
  },
  {
    title: "C++",
    icon: <SiCplusplus className="text-4xl text-blue-600" />,
    href: "https://isocpp.org/",
  },
  {
    title: "C",
    icon: <SiC className="text-4xl text-gray-400" />,
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    title: "Java",
    icon: <FaJava className="text-4xl text-red-500" />,
    href: "https://www.oracle.com/java/",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript className="text-4xl text-yellow-500" />,
    href: "https://www.javascript.com/",
  },
];

export const technologies = [
  {
    title: "Next.js",
    icon: <SiNextdotjs className="text-4xl text-white" />,
    href: "https://nextjs.org/",
  },
  {
    title: "React",
    icon: <SiReact className="text-4xl text-cyan-500" />,
    href: "https://react.dev/",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-blue-400" />,
    href: "https://tailwindcss.com/",
  },
  {
    title: "Git",
    icon: <SiGit className="text-4xl text-orange-500" />,
    href: "https://git-scm.com/",
  },
  {
    title: "AWS",
    icon: <FaAws className="text-4xl text-yellow-500" />,
    href: "https://aws.amazon.com/",
  },
  {
    title: "Docker",
    icon: <SiDocker className="text-4xl text-blue-500" />,
    href: "https://www.docker.com/",
  },
  {
    title: "Linux",
    icon: <SiLinux className="text-4xl text-black" />,
    href: "https://www.linux.org/",
  },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"languages" | "technologies">(
    "languages"
  );

  return (
    <div id="skills" className="py-10 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-white mb-8">
          Tools & Technologies
        </h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-6 py-2 rounded-md transition duration-300 ${
              activeTab === "languages"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setActiveTab("languages")}
          >
            Programming Languages
          </button>
          <button
            className={`px-6 py-2 rounded-md transition duration-300 ${
              activeTab === "technologies"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setActiveTab("technologies")}
          >
            Technologies
          </button>
        </div>

        {/* Display Either Languages or Technologies */}
        <div className="flex flex-wrap justify-center gap-6">
          {(activeTab === "languages"
            ? programming_language
            : technologies
          ).map((tech) => (
            <a
              key={tech.title}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <div className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
                {tech.icon}
              </div>
              <span className="text-white mt-2 hover:text-orange-400 hover:scale-105 transition duration-300">
                {tech.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
