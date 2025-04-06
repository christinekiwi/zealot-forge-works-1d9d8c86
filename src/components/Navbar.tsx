
import { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4",
        scrolled ? "bg-minecraft-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold text-white">
          zealot<span className="text-minecraft-purple">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a 
            href="#services" 
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('portfolio');
            }}
          >
            Portfolio
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={18} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <MessageSquare size={18} />
          </a>
          <a href="mailto:contact@zealot.dev" className="social-icon">
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-minecraft-black/95 backdrop-blur-md py-6 px-6 border-t border-white/5 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className={`text-xl ${activeSection === 'home' ? 'text-minecraft-purple font-medium' : 'text-white/80'}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`text-xl ${activeSection === 'about' ? 'text-minecraft-purple font-medium' : 'text-white/80'}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
            <a 
              href="#services" 
              className={`text-xl ${activeSection === 'services' ? 'text-minecraft-purple font-medium' : 'text-white/80'}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className={`text-xl ${activeSection === 'portfolio' ? 'text-minecraft-purple font-medium' : 'text-white/80'}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className={`text-xl ${activeSection === 'contact' ? 'text-minecraft-purple font-medium' : 'text-white/80'}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </nav>
          
          <div className="flex space-x-4 mt-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={18} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <MessageSquare size={18} />
            </a>
            <a href="mailto:contact@zealot.dev" className="social-icon">
              <Mail size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
