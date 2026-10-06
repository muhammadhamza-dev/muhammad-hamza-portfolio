import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data';

export default function Hero() {
  const { hero, personal } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent-teal/40 blur-[100px] mix-blend-screen animate-gradient-xy" />
        <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-accent-indigo/40 blur-[100px] mix-blend-screen animate-gradient-x" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full max-w-7xl">
        <motion.div 
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="mb-4">
            <span className="font-mono text-sm md:text-base text-accent-teal tracking-wider uppercase bg-accent-teal/10 px-3 py-1 rounded-full">
              {personal.title}
            </span>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.05] mb-6"
          >
            I build full-stack<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-indigo">
              products that ship
            </span><br/>
            and scale.
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed font-body"
          >
            Hi, I'm {personal.name}. {hero.subheadline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-16">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 bg-dark text-light dark:bg-light dark:text-dark px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform interactive"
            >
              View my work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={personal.resumePdfUrl} 
              target="_blank"
              rel="noopener noreferrer"
              download="Muhammad_Hamza_Resume.pdf"
              className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors interactive"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800 max-w-xl">
            {hero.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-display font-bold">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
