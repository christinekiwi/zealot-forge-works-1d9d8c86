
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const techStackItemRefs = useRef<Array<HTMLLIElement | null>>([]);

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

    techStackItemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      techStackItemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const techStack = [
    { name: 'Java', category: 'Languages' },
    { name: 'JavaScript', category: 'Languages' },
    { name: 'TypeScript', category: 'Languages' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'Minecraft API', category: 'Gaming' },
    { name: 'Spigot/Paper', category: 'Gaming' },
    { name: 'Bukkit', category: 'Gaming' },
    { name: 'Git', category: 'Tools' },
    { name: 'Docker', category: 'Tools' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 opacity-0"
      style={{ transitionDelay: '100ms' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
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

          <div className="md:w-1/2">
            <div className="glass p-8">
              <h3 className="text-xl font-semibold mb-6">Technical Expertise</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase text-white/50 mb-3">Tech Stack</h4>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {techStack.map((tech, index) => (
                      <li
                        key={tech.name}
                        ref={(el) => (techStackItemRefs.current[index] = el)}
                        className="flex items-center space-x-2 opacity-0"
                        style={{ 
                          transitionDelay: `${150 + index * 50}ms`,
                          animation: 'none' 
                        }}
                      >
                        <div className="w-2 h-2 rounded-full bg-minecraft-purple" />
                        <span className="text-white/80">{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm uppercase text-white/50 mb-3">Experience</h4>
                  <div className="space-y-4">
                    <div className="glass p-4">
                      <div className="text-sm text-white/50">2020 - Present</div>
                      <div className="font-medium">Freelance Developer</div>
                      <div className="text-sm text-white/80">Minecraft & Web Solutions</div>
                    </div>
                    <div className="glass p-4">
                      <div className="text-sm text-white/50">2018 - 2020</div>
                      <div className="font-medium">Server Network Admin</div>
                      <div className="text-sm text-white/80">CraftRealms Network</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
