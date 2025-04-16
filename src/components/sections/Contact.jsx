import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gray-900 text-white"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-shadow-lg">
          Get In Touch
        </h2>
        <p className="text-lg">
          Feel free to reach out to me through any of the following channels.
        </p>
      </div>
      
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

        {/* Display Email */}
        <div className="mb-4">
          <p className="text-lg">📧 Email:</p>
          <a
            href="mailto:your-email@example.com"
            className="text-blue-400 hover:text-blue-600"
          >
            your-email@example.com
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
