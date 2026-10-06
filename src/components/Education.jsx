import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0f0f0f] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 bg-accent-teal/10 text-accent-teal rounded-xl">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold">Education</h2>
          </motion.div>
          
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <div className="text-gray-500 mb-4">{edu.institution}</div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">{edu.period}</span>
                  <span className="font-medium text-accent-indigo">{edu.details}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 bg-accent-indigo/10 text-accent-indigo rounded-xl">
              <Award size={24} />
            </div>
            <h2 className="text-3xl font-display font-bold">Certifications & Awards</h2>
          </motion.div>
          
          <ul className="space-y-4">
            {certifications.map((cert, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-dark border border-transparent hover:border-gray-200 dark:hover:border-gray-800 transition-all"
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-accent-teal flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{cert}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}
