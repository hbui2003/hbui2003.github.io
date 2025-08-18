import React from "react";
import farmartT from "../assets/portfolio/oop_project.jpg";
import Tictactoe from "../assets/portfolio/TicTacToe.png";
import navbar from "../assets/portfolio/navbar.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: farmartT,
      title: "OOP Farmart Project",
      description:
        "An object-oriented programming project focused on farm management tools and interfaces.",
      link: "https://github.com/hbui2003/OOP_FarMartT_System",
    },
    {
      id: 2,
      src: Tictactoe,
      title: "Tic Tac Toe Game",
      description:
        "A classic Tic Tac Toe game implemented in JavaScript, HTML, and CSS.",
      link: "https://github.com/yourusername/tic-tac-toe",
    },
    {
      id: 3,
      src: farmartT,
      title: "Another Farmart Project",
      description:
        "A different version of the Farmart project with extended features.",
      link: "https://github.com/yourusername/another-farmart-project",
    },
    {
      id: 4,
      src: reactSmooth,
      title: "Smooth Scroll Project",
      description:
        "A React project featuring smooth scrolling navigation between sections.",
      link: "https://github.com/yourusername/smooth-scroll-project",
    },
    {
      id: 5,
      src: navbar,
      title: "Responsive Navbar",
      description:
        "A fully responsive and modern navbar built using React and Tailwind CSS.",
      link: "https://github.com/yourusername/responsive-navbar",
    },
    {
      id: 6,
      src: reactWeather,
      title: "Weather App",
      description:
        "A weather forecasting app built with React and OpenWeather API integration.",
      link: "https://github.com/yourusername/weather-app",
    },
  ];

  return (
    <div
      name="Projects"
      className="w-full min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full flex flex-col gap-12 bg-[#111827] rounded-2xl p-10 shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Projects
          </h2>
          <p className="text-gray-300">Check out some of my work below</p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, src, title, description, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md border border-gray-700 hover:scale-105 hover:shadow-blue-500/40 duration-300 flex flex-col"
            >
              <img src={src} alt={title} className="h-40 w-full object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm flex-grow">{description}</p>
                <span className="mt-3 inline-block text-blue-400 font-semibold hover:underline">
                  View Project →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
