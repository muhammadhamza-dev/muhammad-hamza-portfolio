import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data';

export default function Skills() {
  const { skills } = portfolioData;
  const categories = Object.keys(skills);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        <div className="w-full md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-8"
          >
            Technical Arsenal
          </motion.h2>
          <div className="flex flex-col gap-2">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveCategory(cat)}
                className={`text-left px-4 py-3 rounded-xl transition-all interactive font-medium text-lg capitalize ${
                  activeCategory === cat 
                    ? 'bg-dark text-light dark:bg-light dark:text-dark translate-x-2' 
                    : 'text-gray-500 hover:text-dark dark:hover:text-light hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/3 min-h-[300px] flex items-center bg-gray-50 dark:bg-[#0f0f0f] rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {skills[activeCategory].map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, type: 'spring' }}
                  className="px-6 py-3 bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-full text-base font-medium shadow-sm hover:border-accent-teal transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
