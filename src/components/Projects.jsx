import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { portfolioData } from '../data';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Selected Work</h2>
          <p className="text-gray-400 max-w-xl text-lg">Products I've built, optimized, and scaled.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-[#151515] rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-colors flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent-teal transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-body leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex gap-4 mt-auto pt-6 border-t border-gray-800">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-accent-teal transition-colors interactive"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-accent-indigo transition-colors interactive"
                  >
                    <Code size={16} /> Source Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
