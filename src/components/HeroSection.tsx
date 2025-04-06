
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
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
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
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
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
