
import { useEffect, useRef } from 'react';
import { Server, Puzzle, Globe, Code, Zap, Bug, Shield } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
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
    <div ref={cardRef} className="service-card opacity-0" style={{ animation: 'none' }}>
      <div className="flex flex-col h-full">
        <div className="p-3 rounded-xl bg-minecraft-purple/20 backdrop-blur-sm w-fit mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
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
      id="services"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 opacity-0 relative overflow-hidden"
      style={{ transitionDelay: '100ms' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <p className="text-sm font-medium text-white/80">Services</p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
            What I <span className="text-minecraft-purple">Offer</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Specialized services for Minecraft development and modern web solutions,
            tailored to your specific needs and requirements.
          </p>
        </div>

        {/* 3D Anime Character */}
        <div className="absolute right-0 top-1/4 md:right-10 md:top-1/3 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 opacity-80 animate-float">
          <img 
            src="/lovable-uploads/1eec3168-70f3-4c28-88eb-b259b1fa78f4.png" 
            alt="Anime character" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <ServiceCard
            title="Minecraft Server Setup"
            description="Complete server setup from scratch, including configuration, plugin installation, and optimization for different server types like SMP, Factions, or Skyblock."
            icon={<Server size={24} className="text-minecraft-purple" />}
            delay={100}
          />
          
          <ServiceCard
            title="Plugin Configuration"
            description="Expert configuration of plugins to work seamlessly together, creating a balanced and engaging player experience with custom features."
            icon={<Puzzle size={24} className="text-minecraft-purple" />}
            delay={200}
          />
          
          <ServiceCard
            title="Performance Tuning"
            description="Optimize your server for maximum performance with minimal lag, even with high player counts. Includes TPS optimization, memory management, and chunk loading improvements."
            icon={<Zap size={24} className="text-minecraft-purple" />}
            delay={300}
          />
          
          <ServiceCard
            title="Bug Fixing & Troubleshooting"
            description="Diagnose and resolve server crashes, plugin conflicts, and performance issues. Complete analysis with practical solutions to keep your server running smoothly."
            icon={<Bug size={24} className="text-minecraft-purple" />}
            delay={400}
          />

          <ServiceCard
            title="Custom Server Types"
            description="Specialized setups for various server types including Factions, Skyblock, Survival Games, and more - with tailored plugins and configurations for each."
            icon={<Shield size={24} className="text-minecraft-purple" />}
            delay={500}
          />
          
          <ServiceCard
            title="Web Dashboard Development"
            description="Custom web interfaces for your Minecraft server. Player stats, shop systems, and admin panels built with modern technologies for a seamless user experience."
            icon={<Globe size={24} className="text-minecraft-purple" />}
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
