import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-teal to-accent-indigo transform origin-left z-[100]"
        style={{ scaleX }}
      />
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-light/70 dark:bg-dark/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight">
            MH<span className="text-accent-teal">.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-accent-teal transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium hover:text-accent-teal transition-colors">Projects</a>
            <a href="#experience" className="text-sm font-medium hover:text-accent-teal transition-colors">Experience</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors interactive"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
