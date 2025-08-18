import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6 py-12"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 bg-[#111827] rounded-2xl p-10 shadow-lg">
        {/* Left Side - Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-6">
            Have a question or want to work together? Drop me a message!
          </p>

          {/* Email */}
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-900/40 rounded-lg">
              <FaEnvelope className="text-purple-400 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Email</h4>
              <p className="text-gray-300">bghuy203@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-900/40 rounded-lg">
              <FaMapMarkerAlt className="text-pink-400 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Location</h4>
              <p className="text-gray-300">Omaha, NE</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <form
            action="https://getform.io/f/bqookoxb"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-[#1e293b] border border-gray-700 text-white focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-[#1e293b] border border-gray-700 text-white focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-3 rounded-lg bg-[#1e293b] border border-gray-700 text-white focus:outline-none focus:border-blue-400"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-[#1e293b] border border-gray-700 text-white focus:outline-none focus:border-blue-400"
            ></textarea>

            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg shadow-md hover:scale-105 transition duration-300 flex items-center justify-center gap-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
