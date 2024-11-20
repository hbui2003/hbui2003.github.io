import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      {/* Container */}
      <div className="container mx-auto flex flex-col items-center">
        {/* Footer Text */}
        <p className="text-lg font-semibold">&copy; 2024 Huy Bui. All rights reserved.</p>
        {/* Social Icons */}
        <div className="flex mt-4 space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/hbui2003/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub size={28} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/huy-bui-b8a044272/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </a>


          {/* Facebook */}
          <a
            href="https://www.facebook.com/bui.huy.1217727/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaFacebook size={28} />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/huyy.bui03/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaInstagram size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
