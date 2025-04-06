
import { ArrowDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-24 px-4 sm:px-6 md:px-12">
      <ParticleBackground />
      
      <div className="absolute top-1/4 -left-36 w-72 h-72 bg-minecraft-purple/20 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 -right-36 w-72 h-72 bg-minecraft-purple/20 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center md:text-left md:items-start space-y-4 sm:space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-2 sm:mb-4">
            <p className="text-sm font-medium text-white/80">
              Minecraft & Web Developer
            </p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight">
            I'm <span className="text-minecraft-purple">Zealot</span> — <br className="hidden md:block" />
            Crafting Digital <br className="hidden md:block" />
            Experiences
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mt-2 sm:mt-6">
            Specializing in custom Minecraft development and modern web applications.
            Bringing your ideas to life with clean code and creative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-8">
            <a 
              href="#portfolio" 
              className="px-6 py-3 bg-minecraft-purple hover:bg-minecraft-purple/90 text-white font-medium rounded-lg transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-lg transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* 3D Anime Character */}
          <div className="absolute right-4 bottom-1/4 sm:right-8 md:right-16 lg:right-24 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-80 animate-float">
            <img 
              src="/lovable-uploads/9ff5a1ad-0fe7-425d-8b77-f4fd76fd3d08.png" 
              alt="Anime character" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
          <span className="text-white/50 text-sm mb-2">Scroll Down</span>
          <button 
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-white/70" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
