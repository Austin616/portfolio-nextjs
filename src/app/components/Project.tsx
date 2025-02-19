"use client";

import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Exercise Catalog",
    description:
      "An exercise catalog web application that allows users to view and find new exercises. It is great for beginners to start their fitness journey.",
    imgSrc: "/images/exercise.png",
    link: "https://workoutexercise.netlify.app/",
  },
  {
    title: "Multithreaded Bellman Ford",
    description:
      "A multithreaded implementation of the Bellman-Ford algorithm for finding the shortest paths from a single source vertex to all other vertices in a weighted graph.",
    imgSrc: "/images/belmondFord.png",
    link: "https://github.com/Austin616/belmondFordAlgo",
  },
  {
    title: "UT Registration Plus",
    description:
      "A Chrome extension that allows students to get more information about classes and professors when registering for classes. Widely used by students at UT Austin.",
    imgSrc: "/images/ut_registration.png",
    link: "https://chromewebstore.google.com/detail/ut-registration-plus/hboadpjkoaieogjimneceaahlppnipaa?hl=en",
  },
  {
    title: "TexasForYou",
    description:
      "A full-stack web application that allows people in Texas to find out more about their local government representatives. Gives information about districts, and who their representative is, and more.",
    imgSrc: "/images/texas4u.png",
    link: "https://gitlab.com/austintran616/cs373-spring-2025-group-20",
  },
];

const Project: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h2 className="text-4xl font-semibold text-center mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 hover:border-orange-400 flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <Image
              src={project.imgSrc}
              alt={project.title}
              className="w-full object-cover mb-4 rounded"
            />
            <p className="text-lg flex-grow">{project.description}</p>
            <a
              href={project.link}
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
