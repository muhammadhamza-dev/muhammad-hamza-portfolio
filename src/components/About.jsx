import { motion } from 'framer-motion';
import { portfolioData } from '../data';

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 relative group">
              {/* Overlay for aesthetic */}
              <div className="absolute inset-0 bg-accent-teal/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src={personal.photoUrl} 
                alt={personal.name}
                className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-indigo rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 blur-2xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <h2 className="text-sm font-mono text-accent-teal uppercase tracking-widest mb-4">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
              {about.personalityLine}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-body leading-relaxed">
              {about.text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
