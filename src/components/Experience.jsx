import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      icon: <FaReact size={40} className="text-cyan-400" />,
      title: "React.js",
      category: "Frontend",
    },
    {
      id: 2,
      icon: <SiNextdotjs size={40} className="text-white" />,
      title: "Next.js",
      category: "Frontend",
    },
    {
      id: 3,
      icon: <FaNodeJs size={40} className="text-green-500" />,
      title: "Node.js",
      category: "Backend",
    },
    {
      id: 4,
      icon: <SiExpress size={40} className="text-gray-300" />,
      title: "Express.js",
      category: "Backend",
    },
    {
      id: 5,
      icon: <SiMongodb size={40} className="text-green-400" />,
      title: "MongoDB",
      category: "Database",
    },
    {
      id: 6,
      icon: <SiPostgresql size={40} className="text-blue-400" />,
      title: "PostgreSQL",
      category: "Database",
    },
    {
      id: 7,
      icon: <FaDatabase size={40} className="text-yellow-400" />,
      title: "SQL / MySQL",
      category: "Database",
    },
    {
      id: 8,
      icon: <SiGraphql size={40} className="text-pink-400" />,
      title: "GraphQL",
      category: "Backend",
    },
    {
      id: 9,
      icon: <FaDocker size={40} className="text-blue-400" />,
      title: "Docker",
      category: "DevOps",
    },
    {
      id: 12,
      icon: <FaGitAlt size={40} className="text-red-500" />,
      title: "Git / GitHub",
      category: "DevOps",
    },
    {
      id: 13,
      icon: <FaHtml5 size={40} className="text-orange-500" />,
      title: "HTML5",
      category: "Frontend",
    },
    {
      id: 14,
      icon: <FaCss3Alt size={40} className="text-blue-500" />,
      title: "CSS3",
      category: "Frontend",
    },
    {
      id: 15,
      icon: <SiTailwindcss size={40} className="text-cyan-300" />,
      title: "Tailwind CSS",
      category: "Frontend",
    },
    {
      id: 16,
      icon: <SiJavascript size={40} className="text-yellow-400" />,
      title: "JavaScript",
      category: "Language",
    },
    {
      id: 17,
      icon: <SiTypescript size={40} className="text-blue-400" />,
      title: "TypeScript",
      category: "Language",
    },
    {
      id: 18,
      icon: <FaPython size={40} className="text-yellow-300" />,
      title: "Python",
      category: "Language",
    },
    {
      id: 19,
      icon: <FaJava size={40} className="text-red-400" />,
      title: "Java",
      category: "Language",
    },
    {
      id: 20,
      icon: <SiCplusplus size={40} className="text-blue-600" />,
      title: "C/C++",
      category: "Language",
    },
  ];

  return (
    <div
      name="Experience"
      className="w-full min-h-screen bg-[#0a0e1a] text-white flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-slate-400 tracking-wider uppercase mb-3">
            My Expertise
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Technologies
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {experiences.map(({ id, icon, title, category }) => (
            <div
              key={id}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:border-cyan-500/50 hover:bg-slate-900/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>

              {/* Title */}
              <p className="text-sm font-medium text-slate-300 text-center group-hover:text-white transition-colors">
                {title}
              </p>

              {/* Category tag - appears on hover */}
              <div className="absolute -top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                  {category}
                </span>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              18+
            </div>
            <p className="text-slate-400 text-sm mt-2">Technologies</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              5+
            </div>
            <p className="text-slate-400 text-sm mt-2">Languages</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Full-Stack
            </div>
            <p className="text-slate-400 text-sm mt-2">Development</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              2+
            </div>
            <p className="text-slate-400 text-sm mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
