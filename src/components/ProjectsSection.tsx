
import { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';

interface Metric {
  text: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  metrics: Metric[];
}

const projects: Project[] = [
  {
    title: "Vanilla Survival Enhancement",
    description: "Complete redesign of a popular survival server with custom plugins, performance optimization, and anti-grief measures.",
    image: "/lovable-uploads/a57ab819-ba81-4842-8a67-b5cbb3eccd8f.png",
    category: "Survival",
    metrics: [
      { text: "50% performance improvement" },
      { text: "99.9% uptime achieved" },
      { text: "Player retention increased by 75%" }
    ]
  },
  {
    title: "Minigame Hub Development",
    description: "Created a minigame network with custom games, player tracking system, and rewards integration.",
    image: "/lovable-uploads/5ef0ddc1-6247-4915-b436-184f7d6529a3.png",
    category: "Minigames",
    metrics: [
      { text: "8 unique minigames implemented" },
      { text: "Supports 500+ concurrent players" },
      { text: "Queue system with 95% efficiency" }
    ]
  },
  {
    title: "RPG Server Overhaul",
    description: "Transformed a basic RPG server with custom class system, quests, and progression mechanics.",
    image: "/lovable-uploads/5ef0ddc1-6247-4915-b436-184f7d6529a3.png",
    category: "RPG",
    metrics: [
      { text: "300+ quests created" },
      { text: "Custom skill tree with 8 classes" },
      { text: "Economy rebalance increased player spending by 40%" }
    ]
  },
  {
    title: "Skyblock Economy Revamp",
    description: "Redesigned a Skyblock server economy with balanced progression, custom islands, and server shop system.",
    image: "/lovable-uploads/a57ab819-ba81-4842-8a67-b5cbb3eccd8f.png",
    category: "Skyblock",
    metrics: [
      { text: "Economy inflation reduced by 80%" },
      { text: "Island generation speed improved by 200%" },
      { text: "New progression system with 10 tiers" }
    ]
  }
];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
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

  const filteredProjects = selectedCategory === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const categories = ["All Projects", "Survival", "Minigames", "RPG", "Skyblock"];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 opacity-0 relative overflow-hidden"
      style={{ transitionDelay: '100ms' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
            Featured <span className="text-minecraft-purple">Projects</span>
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-minecraft-purple text-white'
                  : 'bg-gray-800 text-white/70 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/80 border border-gray-700 rounded-lg overflow-hidden transform transition-all duration-300 hover:border-minecraft-purple/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            >
              <div className="overflow-hidden h-52 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-xs uppercase text-minecraft-purple font-semibold tracking-wider mb-2">KEY METRICS:</h4>
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check size={16} className="text-minecraft-purple mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-300">{metric.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
