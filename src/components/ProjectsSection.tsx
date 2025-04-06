
import { useEffect, useRef } from 'react';
import { Server, Shield, ShoppingCart, Zap, Settings, Lock, PlugZap } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ProjectCard = ({ title, description, icon, delay }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (cardRef.current) {
              cardRef.current.style.transitionDelay = `${delay}ms`;
              cardRef.current.classList.add('animate-fade-in');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={cardRef} className="glass p-6 relative opacity-0" style={{ animation: 'none' }}>
      <div className="absolute -top-3 -right-3 p-2 bg-minecraft-purple/20 backdrop-blur-sm rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const ProjectsSection = () => {
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

  const projects = [
    {
      title: "Lifesteal Server Setup",
      description: "Custom Lifesteal SMP server setup with heart-collecting mechanics, custom death system, and balanced progression for engaging gameplay.",
      icon: <Shield size={20} className="text-minecraft-purple" />
    },
    {
      title: "Survival Server Setup",
      description: "Feature-rich survival server with custom terrain generation, balanced economy, and unique gameplay mechanics for a fresh survival experience.",
      icon: <Server size={20} className="text-minecraft-purple" />
    },
    {
      title: "Shop & Economy Configuration",
      description: "Comprehensive shop system with dynamic pricing, custom GUI interfaces, and seamless integration with server economy for a balanced player experience.",
      icon: <ShoppingCart size={20} className="text-minecraft-purple" />
    },
    {
      title: "Server Optimization",
      description: "Server performance enhancement package with lag elimination, TPS optimization, and memory management for smooth gameplay even with high player counts.",
      icon: <Zap size={20} className="text-minecraft-purple" />
    },
    {
      title: "Custom Plugin Tweaks",
      description: "Modifications and customizations to existing plugins to create unique features and gameplay mechanics tailored to your server's specific needs.",
      icon: <Settings size={20} className="text-minecraft-purple" />
    },
    {
      title: "Permissions Setup",
      description: "Comprehensive permissions configuration with role-based access control, ensuring server security while providing appropriate access to staff and players.",
      icon: <Lock size={20} className="text-minecraft-purple" />
    },
    {
      title: "Performance Improvements",
      description: "Advanced performance analysis and optimization to reduce lag, improve server stability, and enhance overall player experience during peak hours.",
      icon: <PlugZap size={20} className="text-minecraft-purple" />
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 opacity-0 relative overflow-hidden"
      style={{ transitionDelay: '100ms' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <p className="text-sm font-medium text-white/80">Projects</p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="text-minecraft-purple">Work</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Check out some of my recent Minecraft server projects and configurations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              icon={project.icon}
              delay={100 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
