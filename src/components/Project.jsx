import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
      tags: ["Java", "OOP", "Design Patterns"],
      link: "https://github.com/hbui2003/OOP_FarMartT_System",
    },
    {
      id: 2,
      src: Tictactoe,
      title: "Tic Tac Toe Game",
      description:
        "A classic Tic Tac Toe game implemented with JavaScript featuring AI opponent.",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/yourusername/tic-tac-toe",
    },
    {
      id: 3,
      src: farmartT,
      title: "Another Farmart Project",
      description:
        "A different version of the Farmart project with extended features and improved UX.",
      tags: ["Java", "MySQL", "JavaFX"],
      link: "https://github.com/yourusername/another-farmart-project",
    },
    {
      id: 4,
      src: reactSmooth,
      title: "Smooth Scroll Project",
      description:
        "A React project featuring smooth scrolling navigation between sections.",
      tags: ["React", "Framer Motion", "CSS"],
      link: "https://github.com/yourusername/smooth-scroll-project",
    },
    {
      id: 5,
      src: navbar,
      title: "Responsive Navbar",
      description:
        "A fully responsive and modern navbar built using React and Tailwind CSS.",
      tags: ["React", "Tailwind", "Responsive"],
      link: "https://github.com/yourusername/responsive-navbar",
    },
    {
      id: 6,
      src: reactWeather,
      title: "Weather App",
      description:
        "A weather forecasting app built with React and OpenWeather API integration.",
      tags: ["React", "API", "Real-time"],
      link: "https://github.com/yourusername/weather-app",
    },
  ];

  return (
    <div
      name="Projects"
      className="w-full min-h-screen bg-[#0a0e1a] text-white flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-slate-400 tracking-wider uppercase mb-3">
            My Work
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Projects
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in software
            development
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, src, title, description, tags, link }) => (
            <div
              key={id}
              className="group relative bg-slate-900/30 rounded-2xl overflow-hidden border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Hover Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cyan-500/90 rounded-lg hover:bg-cyan-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="text-white text-xl" />
                  </a>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-500/90 rounded-lg hover:bg-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt className="text-white text-xl" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-slate-800/50 text-cyan-400 rounded-full border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
