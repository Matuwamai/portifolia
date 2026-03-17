import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 John Doe. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
