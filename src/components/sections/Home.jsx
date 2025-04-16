import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center z-10 px-4"
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-500 via-sky-400 to-purple-500 bg-clip-text text-transparent tracking-tight leading-tight">
            Hey, I'm Tanish 🚀
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A passionate <span className="text-blue-400 font-medium">Full Stack Developer</span> on a mission to build modern, fast, and scalable digital products.  
            I craft pixel-perfect UIs, write clean code, and deliver smooth user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/40"
            >
              🎯 Explore Projects
            </a>

            <a
              href="#contact"
              className="border border-indigo-400 text-indigo-400 hover:bg-indigo-500/10 py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-indigo-500/20"
            >
              ✉️ Let’s Connect
            </a>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
