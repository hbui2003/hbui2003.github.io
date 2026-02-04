import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode } from "react-icons/fa";
import HuyImage from "../assets/PhotoshopPreview_Image_2024-11-05.png";

const About = () => {
  return (
    <section
      name="About"
      className="w-full min-h-screen bg-[#0a0e1a] text-white flex items-center py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="group relative">
              {/* Blue glow on hover */}
              <div className="absolute -inset-4 rounded-[28px] bg-cyan-400/0 blur-2xl transition duration-500 group-hover:bg-cyan-400/20" />

              {/* Image Card */}
              <div className="relative rounded-[26px] bg-[#111827] p-4 shadow-2xl border border-slate-700/50">
                <div className="overflow-hidden rounded-[20px]">
                  <img
                    src={HuyImage}
                    alt="Huy Bui"
                    className="w-[420px] max-w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text + Cards */}
          <div>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <p className="text-sm tracking-wide text-slate-400 mb-2">
                Get To Know
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold text-cyan-400">
                About Me
              </h2>
            </motion.div>

            {/* Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-10 space-y-6 text-slate-300 leading-relaxed text-lg"
            >
              <p>
                Hello! I'm{" "}
                <span className="font-semibold text-white">Huy Bui</span>, an
                aspiring{" "}
                <span className="text-cyan-300 font-semibold">
                  Software Developer
                </span>{" "}
                who enjoys building clean, reliable applications and solving
                real-world problems.
              </p>

              <p>
                I've gained hands-on experience through{" "}
                <span className="px-2 py-1 rounded-md bg-sky-500/15 text-sky-200 font-medium">
                  software development project
                </span>{" "}
                and I'm actively building projects in{" "}
                <span className="px-2 py-1 rounded-md bg-blue-500/15 text-blue-200 font-medium">
                  full-stack development
                </span>
                .
              </p>

              <p>
                My focus is becoming a strong software engineer by improving my
                fundamentals, writing maintainable code, and continuously
                learning.
              </p>
            </motion.div>

            {/* Bottom Cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-10 grid md:grid-cols-2 gap-6"
            >
              {/* Education Card */}
              <div className="rounded-2xl bg-[#111827] border border-slate-700/50 p-6 shadow-xl hover:border-cyan-500/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                    <FaGraduationCap className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>

                <div className="text-slate-300 space-y-1">
                  <p>Computer Science</p>
                  <p>University of Nebraska-Lincoln</p>
                  <p>Expected: Dec 2026</p>
                  <p>GPA: 3.93/4.0</p>
                </div>
              </div>

              {/* Skills Card */}
              <div className="rounded-2xl bg-[#111827] border border-slate-700/50 p-6 shadow-xl hover:border-blue-500/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/15 flex items-center justify-center">
                    <FaCode className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Skills</h3>
                </div>

                <ul className="text-slate-300 space-y-2">
                  <li>Full-Stack Development</li>
                  <li>Backend + APIs</li>
                  <li>Automation (PowerShell,Python)</li>
                  <li>DSA + OOP</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
