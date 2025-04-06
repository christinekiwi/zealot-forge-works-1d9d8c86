
import { useEffect, useRef } from 'react';
import { Github, Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 opacity-0 relative overflow-hidden"
      style={{ transitionDelay: '100ms' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <p className="text-sm font-medium text-white/80">Contact</p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
            Let's <span className="text-minecraft-purple">Connect</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind or just want to say hello? I'm always open to discussing
            new opportunities and ideas.
          </p>
        </div>
        
        {/* 3D Anime Character */}
        <div className="absolute left-0 bottom-1/4 md:left-10 md:bottom-1/3 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 opacity-80 animate-float" style={{ animationDelay: "1.5s" }}>
          <img 
            src="/lovable-uploads/68d0f679-4246-40e9-ada3-f603c7a18ec3.png" 
            alt="Anime character" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="glass p-8 md:p-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-minecraft-purple/20">
                <Mail size={24} className="text-minecraft-purple" />
              </div>
              <div>
                <h4 className="text-sm uppercase text-white/50 mb-1">Email</h4>
                <a 
                  href="mailto:contact@zealot.dev" 
                  className="text-white hover:text-minecraft-purple transition-colors text-lg"
                >
                  contact@zealot.dev
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-minecraft-purple/20">
                <MessageSquare size={24} className="text-minecraft-purple" />
              </div>
              <div>
                <h4 className="text-sm uppercase text-white/50 mb-1">Discord</h4>
                <p className="text-white text-lg">zealot#1234</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-minecraft-purple/50 text-white/70 hover:text-minecraft-purple transition-all"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-minecraft-purple/50 text-white/70 hover:text-minecraft-purple transition-all"
                aria-label="Discord"
              >
                <MessageSquare size={28} />
              </a>
              <a 
                href="mailto:contact@zealot.dev"
                className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-minecraft-purple/50 text-white/70 hover:text-minecraft-purple transition-all"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
