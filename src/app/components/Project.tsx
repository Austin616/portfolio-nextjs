"use client";

import { link } from "fs";
import React from "react";

// Placeholder data for the projects
const projects = [
  {
    title: 'Excercise Catalog',
    description: 'A excercise catalog web application that allows users to view and find new excercises. It is great for beginers to start their fitness journey.',
    imgSrc: '/path/to/image1.jpg',
    link: 'https://workoutexercise.netlify.app/'
    },
    {
    title: 'Multithreaded Bellman Ford',
    description: 'A multithreaded implementation of the Bellman-Ford algorithm for finding the shortest paths from a single source vertex to all other vertices in a weighted graph.',
    imgSrc: '/path/to/image2.jpg',
    link: ''
    },
    {
    title: 'UT Registration Plus',
    description: 'A chrome extension that allows students to get more information about classes and professors when registering for classes. Widely used by students at UT Austin.',
    imgSrc: '/path/to/image3.jpg',
    link: 'https://chromewebstore.google.com/detail/ut-registration-plus/hboadpjkoaieogjimneceaahlppnipaa?hl=en'
    },
    {
    title: 'TexasForYou',
    description: 'A fullstack web application that allows people in Texas find out more about their local government representatives. Gives information about districts, and who is their representative and more.',
    imgSrc: '/path/to/image4.jpg',
    link: 'https://gitlab.com/austintran616/cs373-spring-2025-group-20'
    }
];

const Project: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <h2 className="text-4xl font-semibold text-center mb-10">My Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 hover:border-orange-400">
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-lg mb-4">{project.description}</p>
            <a
              href={project.link}
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
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
