
import { useEffect, useRef } from 'react';

const AboutSection = () => {
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
      id="about"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 opacity-0"
      style={{ transitionDelay: '100ms' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
              <p className="text-sm font-medium text-white/80">About Me</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Minecraft Developer & Web Engineer
            </h2>
            <div className="space-y-4 text-white/80">
              <p>
                I'm a passionate developer with over 5 years of experience creating custom Minecraft plugins, 
                server setups, and modern web applications.
              </p>
              <p>
                My journey began with Minecraft modding, which evolved into a deep understanding of Java and 
                server architecture. I've since expanded my expertise to full-stack web development, combining 
                both worlds to create unique digital experiences.
              </p>
              <p>
                I focus on creating solutions that are not only functional but also user-friendly and 
                performance-optimized. Whether it's a complex Minecraft plugin or a responsive web application, 
                I bring the same level of attention to detail and passion for clean code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
