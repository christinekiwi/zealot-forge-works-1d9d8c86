
import { useEffect, useRef } from 'react';
import { Server, Puzzle, Globe, Code } from 'lucide-react';

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
      className="py-24 px-6 md:px-12 opacity-0"
      style={{ transitionDelay: '100ms' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <p className="text-sm font-medium text-white/80">Services</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What I <span className="text-minecraft-purple">Offer</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Specialized services for Minecraft development and modern web solutions,
            tailored to your specific needs and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard
            title="Custom Minecraft Plugins"
            description="Bespoke plugins developed specifically for your server needs. From gameplay mechanics to administration tools, I create solutions that enhance player experience."
            icon={<Puzzle size={24} className="text-minecraft-purple" />}
            delay={100}
          />
          
          <ServiceCard
            title="Minecraft Server Setup"
            description="Complete server configuration including performance optimization, plugin integration, and security hardening. Get your Minecraft server up and running with professional setup."
            icon={<Server size={24} className="text-minecraft-purple" />}
            delay={200}
          />
          
          <ServiceCard
            title="Web Dashboard Development"
            description="Custom web interfaces for your Minecraft server. Player stats, shop systems, and admin panels built with modern technologies for a seamless user experience."
            icon={<Globe size={24} className="text-minecraft-purple" />}
            delay={300}
          />
          
          <ServiceCard
            title="Website Design & Development"
            description="Responsive, fast, and visually appealing websites built with modern frameworks. Whether you need a simple landing page or a complex web application, I deliver clean and efficient solutions."
            icon={<Code size={24} className="text-minecraft-purple" />}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
