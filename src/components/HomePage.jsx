import React from "react";
import HuyImage from "../assets/PhotoshopPreview_Image_2024-11-05.png";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 pt-20 flex items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center md:w-1/2"
        >
          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-semibold text-gray-300"
          >
            👋 Hello, it&apos;s me
          </motion.h1>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mt-2"
          >
            Huy Bui
          </motion.h2>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white py-4"
          >
            <span className="mr-2">I&apos;m a</span>
            <ReactTyped
              strings={[
                "Software Development",
                "AI Engineer",
                "Data Engineer",
                "Web Development",
                ,
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-gray-400 text-lg mt-4 leading-relaxed"
          >
            I am <span className="text-cyan-400 font-semibold">Huy Bui</span>, a
            dedicated and ambitious{" "}
            <span className="text-blue-400 font-semibold">
              Computer Science student
            </span>
            . With a strong foundation in programming, mathematics, and software
            engineering, I&apos;m passionate about solving complex problems and
            delivering efficient, innovative solutions.
          </motion.p>

          {/* Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6"
          >
            <Link
              to="About"
              smooth
              duration={500}
              offset={-80}
              className="group text-white px-6 py-3 flex items-center w-fit rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300 ml-1">
                <TiArrowRightOutline size={22} />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          <div className="relative group">
            {/* Glow Circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 blur-3xl opacity-30 group-hover:opacity-50 transition"></div>
            <img
              src={HuyImage}
              alt="profile"
              className="rounded-full w-64 md:w-80 border-4 border-cyan-500 shadow-xl relative z-10 transform group-hover:scale-110 transition duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
