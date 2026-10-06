import { motion } from 'framer-motion';
import { portfolioData } from '../data';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-display font-bold mb-16 text-center"
      >
        Experience
      </motion.h2>

      <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-4 md:ml-0">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.2 }}
            className="mb-12 ml-8 relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-light dark:bg-dark border-4 border-accent-indigo rounded-full" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-bold font-display">{exp.title}</h3>
              <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-max mt-2 md:mt-0">
                {exp.period}
              </span>
            </div>
            
            <div className="text-accent-teal font-medium mb-4">{exp.company} &middot; {exp.location}</div>
            
            <ul className="space-y-3">
              {exp.achievements.map((item, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                  <span className="mr-2 text-accent-indigo mt-1">▹</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
