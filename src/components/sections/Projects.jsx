import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* MERN Stack Personal Portfolio */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">MERN Stack Personal Portfolio</h3>
              <p className="text-gray-400 mb-4">
                A personalized portfolio built using the MERN stack. Showcasing my full-stack development skills, with sections for projects, blog posts, and an integrated contact form.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express", "React", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Google Keep-Style To-Do App */}
            <div
              className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Google Keep-Style To-Do App</h3>
              <p className="text-gray-400 mb-4">
                A simple and sleek To-Do app inspired by Google Keep. Built using the MERN stack, it allows users to create, edit, and delete tasks, with an option for user authentication and custom themes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express", "React", "Node.js", "JWT"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Real-Time Chat App */}
            <div
              className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-400 mb-4">
                A scalable real-time chat application with messaging, user presence detection, and group chat support, built using Socket.IO, React, and Node.js.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "React", "Node.js", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* AI/ML Integration Project */}
            <div
              className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h3 className="text-xl font-bold mb-2">AI/ML Integration</h3>
              <p className="text-gray-400 mb-4">
                An AI-powered project where machine learning models are integrated into web applications to provide advanced predictive features like recommendation systems, chatbots, and more.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "Flask", "React"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
