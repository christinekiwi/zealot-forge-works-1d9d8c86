
import { useEffect, useRef } from 'react';
import { Server, Bot, Settings, Zap, Code, Shield } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-6 transition-all duration-300 hover:border-minecraft-purple/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]">
      <div className="flex flex-col h-full items-center text-center">
        <div className="mb-5 text-minecraft-purple">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
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
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 opacity-0 relative overflow-hidden"
      style={{ transitionDelay: '100ms' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="text-minecraft-purple">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Server Setup"
            description="Full Minecraft server setup from scratch with performance tuning and essential plugins configuration."
            icon={<Server size={48} />}
          />
          
          <ServiceCard
            title="Discord Bot Development"
            description="Custom Discord bots to connect your community with your Minecraft server, including moderation and minigames."
            icon={<Bot size={48} />}
          />
          
          <ServiceCard
            title="Server Configuration"
            description="Optimize your existing server with proper configurations for maximum performance and player experience."
            icon={<Settings size={48} />}
          />
          
          <ServiceCard
            title="Performance Optimization"
            description="Diagnose and resolve lag issues, optimize chunk loading, and improve overall server performance."
            icon={<Zap size={48} />}
          />

          <ServiceCard
            title="Plugin Development"
            description="Custom plugin development to add unique features tailored to your server's specific needs."
            icon={<Code size={48} />}
          />
          
          <ServiceCard
            title="Security Implementation"
            description="Comprehensive security measures to protect your server from attacks, exploits, and unauthorized access."
            icon={<Shield size={48} />}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
