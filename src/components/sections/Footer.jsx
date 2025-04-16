import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import social icons
import { RevealOnScroll } from "../RevealOnScroll";

export const Footer = () => {
  return (
    <footer className="bg-g-900 text-white py-10">
      <RevealOnScroll>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Connect With Me</h3>
            <p className="text-sm">Feel free to reach out through any of the platforms below.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6 md:mb-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-gray-300 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition">
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="text-center md:text-right text-sm mt-6 md:mt-0">
            <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
          </div>
        </div>
      </RevealOnScroll>
    </footer>
  );
};
