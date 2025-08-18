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
    },
    {
      id: 2,
      icon: <SiNextdotjs size={40} className="text-white" />,
      title: "Next.js",
    },
    {
      id: 3,
      icon: <FaNodeJs size={40} className="text-green-500" />,
      title: "Node.js",
    },
    {
      id: 4,
      icon: <SiExpress size={40} className="text-gray-300" />,
      title: "Express.js",
    },
    {
      id: 5,
      icon: <SiMongodb size={40} className="text-green-400" />,
      title: "MongoDB",
    },
    {
      id: 6,
      icon: <SiPostgresql size={40} className="text-blue-400" />,
      title: "PostgreSQL",
    },
    {
      id: 7,
      icon: <FaDatabase size={40} className="text-yellow-400" />,
      title: "SQL / MySQL",
    },
    {
      id: 8,
      icon: <SiGraphql size={40} className="text-pink-400" />,
      title: "GraphQL",
    },
    {
      id: 9,
      icon: <FaDocker size={40} className="text-blue-400" />,
      title: "Docker",
    },
    {
      id: 12,
      icon: <FaGitAlt size={40} className="text-red-500" />,
      title: "Git / GitHub",
    },
    {
      id: 13,
      icon: <FaHtml5 size={40} className="text-orange-500" />,
      title: "HTML5",
    },
    {
      id: 14,
      icon: <FaCss3Alt size={40} className="text-blue-500" />,
      title: "CSS3",
    },
    {
      id: 15,
      icon: <SiTailwindcss size={40} className="text-cyan-300" />,
      title: "Tailwind CSS",
    },
    {
      id: 16,
      icon: <SiJavascript size={40} className="text-yellow-400" />,
      title: "JavaScript",
    },
    {
      id: 17,
      icon: <SiTypescript size={40} className="text-blue-400" />,
      title: "TypeScript",
    },
    {
      id: 18,
      icon: <FaPython size={40} className="text-yellow-300" />,
      title: "Python",
    },
    {
      id: 19,
      icon: <FaJava size={40} className="text-red-400" />,
      title: "Java",
    },
    {
      id: 20,
      icon: <SiCplusplus size={40} className="text-blue-600" />,
      title: "C/C++",
    },
  ];

  return (
    <div
      name="Experience"
      className="w-full min-h-screen bg-[#0f172a] text-white pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Experience
            </span>
          </h2>
          <p className="py-2 text-gray-400">Technologies I've worked with</p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4 sm:px-0">
          {experiences.map(({ id, icon, title }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center bg-white/5 border border-blue-500/20 rounded-2xl p-6 shadow-lg hover:scale-105 hover:border-cyan-400/40 duration-300"
            >
              {icon}
              <p className="mt-4 text-lg text-gray-200">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
