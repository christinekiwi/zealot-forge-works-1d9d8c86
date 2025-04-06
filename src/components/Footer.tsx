
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-display font-bold text-white">
              zealot<span className="text-minecraft-purple">.dev</span>
            </a>
            <p className="mt-2 text-white/60 text-sm">
              © 2025 Zealot. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-minecraft-purple/50 transition-all mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-white/70" />
            </button>
            <p className="text-white/60 text-sm">
              Building digital experiences with code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
