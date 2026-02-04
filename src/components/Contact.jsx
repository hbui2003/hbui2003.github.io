import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full min-h-screen bg-[#0a0e1a] text-white flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-slate-400 tracking-wider uppercase mb-3">
            Let's Connect
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Get in Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              Have a question or want to work together? I'd love to hear from
              you. Drop me a message!
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-900/30 border border-slate-800/50">
                <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-xl">
                  <FaEnvelope className="text-cyan-400 text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:bghuy203@gmail.com"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    bghuy203@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-slate-900/30 border border-slate-800/50">
                <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl">
                  <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">
                    Location
                  </h4>
                  <p className="text-slate-400">Omaha, NE</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="hidden md:block mt-12">
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form
              action="https://getform.io/f/bqookoxb"
              method="POST"
              className="space-y-6"
            >
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <textarea
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/70 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 text-sm text-slate-500">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-700" />
            <span>Available for opportunities</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
