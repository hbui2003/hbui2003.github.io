// src/components/WorkExperience.jsx
import React from "react";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const roles = [
  {
    title: "Software Developer",
    company: "DMSI",
    location: "Lincoln, NE",
    dates: "Sep. 2025 - Present",
    type: "Current",
    bullets: [
      "Developed an offline voice-driven data entry system that converts speech into structured records using React and TypeScript.",
      "Designed asynchronous input handling to capture, parse, validate, and confirm spoken data before persistence.",
      "Implemented text-to-speech summaries, audio feedback, and error handling to improve system reliability in low-connectivity environments.",
    ],
  },
  {
    title: "Information Technology Intern",
    company: "Union Pacific Railroad",
    location: "Omaha, NE",
    dates: "Apr. 2025 - Present",
    type: "Current",
    bullets: [
      "Configured and maintained Windows operating systems, including group policy application and user account management, enhancing reliability for 500+ users.",
      "Automated routine Windows support tasks with Python and PowerShell, reducing manual effort and increasing workflow efficiency by 15%.",
      "Managed the full lifecycle of IT assets including setup, configuration, and end-of-life disposition, ensuring compliance with company security standards.",
    ],
  },
  {
    title: "IT-AV Support Technician",
    company: "University of Nebraska-Lincoln",
    location: "Lincoln, NE",
    dates: "Aug. 2023 - Present",
    type: "Current",
    bullets: [
      "Manage and maintain audiovisual and IT systems for 100+ students, increasing system uptime by 15%.",
      "Utilized advanced video and audio equipment for distance learning and conference facilities to deliver high-quality performance.",
      "Provided technical support for audiovisual equipment and troubleshooting computer problems.",
      "Performed AV installations, leading to a 30% improvement in system reliability and overall performance.",
    ],
  },
  {
    title: "Data Entry Specialist",
    company: "Mai Vu Investment",
    location: "Lincoln, NE",
    dates: "Aug. 2023 - May. 2024",
    type: "Past",
    bullets: [
      "Managed and entered financial transactions totaling over $150,000 monthly using QuickBooks and Microsoft Excel, ensuring accurate and up-to-date records.",
      "Validated and entered data into company systems, maintaining high standards of accuracy and completeness.",
      "Performed monthly inventory checks, achieving 98% stock accuracy and reducing discrepancies by 20%.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section
      name="WorkExperience"
      id="work-experience"
      className="relative w-full bg-[#0a0e1a] text-white py-24 px-6"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-slate-400 tracking-wider uppercase mb-3">
            Professional Background
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Work Experience
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Real-world experience building solutions and supporting teams
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/30 rounded-2xl p-8 border border-slate-800/50 hover:border-cyan-500/50 hover:bg-slate-900/50 transition-all duration-300"
            >
              {/* Icon header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
                  <FaBriefcase className="text-cyan-400 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {role.title}
                  </h3>
                </div>
              </div>

              {/* Company info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <FaBuilding className="text-cyan-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{role.company}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <FaMapMarkerAlt className="text-blue-400 flex-shrink-0" />
                  <span className="text-sm">{role.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <FaCalendarAlt className="text-purple-400 flex-shrink-0" />
                  <span className="text-sm">{role.dates}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6" />

              {/* Responsibilities */}
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-4">
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {role.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              4
            </div>
            <p className="text-slate-400 text-sm mt-2">Roles</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              500+
            </div>
            <p className="text-slate-400 text-sm mt-2">Users Supported</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              2+
            </div>
            <p className="text-slate-400 text-sm mt-2">Years</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              15%
            </div>
            <p className="text-slate-400 text-sm mt-2">Efficiency Gain</p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 text-sm text-slate-500">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-700" />
            <span>Building experience, one challenge at a time</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
