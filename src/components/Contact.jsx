import { motion } from 'framer-motion';
import { Mail, Code, Briefcase, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data';

export default function Contact() {
  const { contact, personal } = portfolioData;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-accent-teal/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
            Let's create <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-indigo">
              something together.
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {contact.callToAction}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <a 
              href={`mailto:${personal.email}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-dark text-light dark:bg-light dark:text-dark px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-transform interactive"
            >
              <Mail size={20} />
              Say Hello
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 border-t border-gray-200 dark:border-gray-800 pt-12">
            <a 
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-dark dark:hover:text-light transition-colors p-2 interactive flex items-center gap-2"
              aria-label="GitHub"
            >
              <Code size={24} />
              <span className="font-medium hidden md:block">GitHub</span>
              <ArrowUpRight size={14} className="hidden md:block opacity-50" />
            </a>
            <a 
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-dark dark:hover:text-light transition-colors p-2 interactive flex items-center gap-2"
              aria-label="LinkedIn"
            >
              <Briefcase size={24} />
              <span className="font-medium hidden md:block">LinkedIn</span>
              <ArrowUpRight size={14} className="hidden md:block opacity-50" />
            </a>
            <a 
              href={`mailto:${personal.email}`}
              className="text-gray-500 hover:text-dark dark:hover:text-light transition-colors p-2 interactive flex items-center gap-2"
              aria-label="Email"
            >
              <Mail size={24} />
              <span className="font-medium hidden md:block">Email</span>
              <ArrowUpRight size={14} className="hidden md:block opacity-50" />
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 w-full text-center text-sm text-gray-400 font-mono">
        © {new Date().getFullYear()} {personal.name}. Built with React & Tailwind.
      </div>
    </section>
  );
}
