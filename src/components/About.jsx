import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaProjectDiagram, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <section
      name="About"
      className="w-full min-h-screen bg-[#0f172a] text-white flex items-center py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pb-12 text-center"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h2>
          <p className="text-gray-400 mt-3 text-lg">
            A quick overview of my journey, skills, and passions 🚀
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Left Side - Story */}
          <div>
            <p className="text-lg leading-relaxed text-gray-300">
              Throughout my academic journey, I&apos;ve excelled in challenging
              courses like{" "}
              <span className="text-blue-400 font-semibold">
                Data Structures
              </span>
              , <span className="text-blue-400 font-semibold">Algorithms</span>,
              and{" "}
              <span className="text-blue-400 font-semibold">
                Operating Systems
              </span>
              . My hands-on experience as an{" "}
              <span className="text-purple-400 font-semibold">
                IT Support Technician
              </span>{" "}
              has sharpened my troubleshooting skills, improving system
              reliability and uptime for university facilities.
            </p>

            <p className="text-lg leading-relaxed mt-6 text-gray-300">
              Beyond academics, I&apos;ve contributed to impactful projects,
              including a{" "}
              <span className="text-purple-400 font-semibold">
                Java-based sales subsystem
              </span>{" "}
              with integrated data processing and a{" "}
              <span className="text-green-400 font-semibold">
                responsive Tic Tac Toe app
              </span>
              . I&apos;m passionate about blending{" "}
              <span className="text-blue-400 font-semibold">
                problem-solving
              </span>{" "}
              with{" "}
              <span className="text-blue-400 font-semibold">
                creative coding
              </span>{" "}
              to build meaningful solutions.
            </p>
          </div>

          {/* Right Side - Fancy Cards */}
          <div className="grid gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-[#1e293b] p-5 rounded-xl shadow-md"
            >
              <FaLaptopCode className="text-3xl text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold">Tech Stack</h3>
                <p className="text-gray-400">
                  Java, C/C++, Python, JavaScript, React, Node.js, MySQL
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-[#1e293b] p-5 rounded-xl shadow-md"
            >
              <FaProjectDiagram className="text-3xl text-purple-400" />
              <div>
                <h3 className="text-xl font-semibold">Projects</h3>
                <p className="text-gray-400">
                  Java sales system, Web apps, IT infra improvements
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-[#1e293b] p-5 rounded-xl shadow-md"
            >
              <FaTools className="text-3xl text-green-400" />
              <div>
                <h3 className="text-xl font-semibold">Strengths</h3>
                <p className="text-gray-400">
                  Problem-solving, troubleshooting, adaptability
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
