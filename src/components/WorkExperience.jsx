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
    title: "Information Technology Intern",
    company: "Union Pacific Railroad",
    location: "Omaha, NE",
    dates: "Apr. 2025 – Present",
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
    dates: "Aug. 2023 – Present",
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
    dates: "Aug. 2023 – May. 2024",
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
      name="WorkExperience" // 👈 add this (must match Link `to`)
      id="work-experience"
      className="relative w-full bg-[#0b1220] text-white py-20"
    >
      {/* soft grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-10">
            {roles.map((r, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={r.title}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* dot */}
                  <span
                    className="absolute left-5 top-2 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg md:left-1/2"
                    aria-hidden
                  >
                    <span className="h-2 w-2 rounded-full bg-white" />
                  </span>

                  {/* card */}
                  <div
                    className={`mt-6 md:mt-0 ${
                      isLeft ? "md:col-start-1" : "md:col-start-2"
                    }`}
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-cyan-500/20">
                      {/* Title row */}
                      <div className="flex flex-wrap items-center gap-3">
                        <FaBriefcase className="text-cyan-300" />
                        <h3 className="text-xl font-semibold">{r.title}</h3>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                        <span className="inline-flex items-center gap-2">
                          <FaBuilding className="text-white/70" />
                          {r.company}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <FaMapMarkerAlt className="text-white/70" />
                          {r.location}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <FaCalendarAlt className="text-white/70" />
                          {r.dates}
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2 text-gray-200">
                        {r.bullets.map((b, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-400" />
                            <p className="leading-relaxed">{b}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* spacer column for alternating layout */}
                  <div
                    className={`${
                      isLeft ? "md:col-start-2" : "md:col-start-1"
                    } hidden md:block`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
