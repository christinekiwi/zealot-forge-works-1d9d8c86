
import { Home, User, Briefcase, Folder, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const MobileNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
      <div className="flex items-center justify-around px-4 py-3 glass rounded-full shadow-lg border border-white/10">
        <button
          className={`p-2 rounded-full ${
            activeSection === 'home'
              ? 'text-minecraft-purple bg-white/10'
              : 'text-white/70'
          }`}
          onClick={() => scrollToSection('home')}
          aria-label="Home section"
        >
          <Home size={20} />
        </button>
        
        <button
          className={`p-2 rounded-full ${
            activeSection === 'about'
              ? 'text-minecraft-purple bg-white/10'
              : 'text-white/70'
          }`}
          onClick={() => scrollToSection('about')}
          aria-label="About section"
        >
          <User size={20} />
        </button>
        
        <button
          className={`p-2 rounded-full ${
            activeSection === 'services'
              ? 'text-minecraft-purple bg-white/10'
              : 'text-white/70'
          }`}
          onClick={() => scrollToSection('services')}
          aria-label="Services section"
        >
          <Briefcase size={20} />
        </button>
        
        <button
          className={`p-2 rounded-full ${
            activeSection === 'portfolio'
              ? 'text-minecraft-purple bg-white/10'
              : 'text-white/70'
          }`}
          onClick={() => scrollToSection('portfolio')}
          aria-label="Portfolio section"
        >
          <Folder size={20} />
        </button>
        
        <button
          className={`p-2 rounded-full ${
            activeSection === 'contact'
              ? 'text-minecraft-purple bg-white/10'
              : 'text-white/70'
          }`}
          onClick={() => scrollToSection('contact')}
          aria-label="Contact section"
        >
          <Mail size={20} />
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
