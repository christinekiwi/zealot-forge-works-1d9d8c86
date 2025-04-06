
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CraftEconomy Plugin",
    category: "Minecraft Plugin",
    image: "/lovable-uploads/1eec3168-70f3-4c28-88eb-b259b1fa78f4.png",
    description: "A comprehensive economy plugin for Minecraft servers with shop integration, player banks, and admin controls.",
    technologies: ["Java", "Spigot API", "MySQL"],
    link: "#"
  },
  {
    id: 2,
    title: "BlockBattle Minigame",
    category: "Minecraft Server",
    image: "/lovable-uploads/9ff5a1ad-0fe7-425d-8b77-f4fd76fd3d08.png",
    description: "Custom minigame with unique mechanics, team systems, and dynamic maps for competitive gameplay.",
    technologies: ["Java", "Paper API", "Redis"],
    link: "#"
  },
  {
    id: 3,
    title: "ServerStats Dashboard",
    category: "Web Application",
    image: "/lovable-uploads/ef54aa99-66b6-4102-a3a2-ddebea05dfca.png",
    description: "Real-time statistics dashboard for Minecraft server owners, featuring player metrics, server performance, and admin controls.",
    technologies: ["React", "Node.js", "Socket.io", "Chart.js"],
    link: "#"
  },
  {
    id: 4,
    title: "CraftCommand Discord Bot",
    category: "Discord Integration",
    image: "/lovable-uploads/68d0f679-4246-40e9-ada3-f603c7a18ec3.png",
    description: "Discord bot that bridges chat between Discord and Minecraft servers with command execution, player lookup, and server status.",
    technologies: ["TypeScript", "Discord.js", "WebSocket"],
    link: "#"
  },
  {
    id: 5,
    title: "SkyIsland Generator",
    category: "Minecraft Plugin",
    image: "/lovable-uploads/9ff5a1ad-0fe7-425d-8b77-f4fd76fd3d08.png",
    description: "Advanced terrain generator plugin for SkyBlock servers with customizable biomes, structures, and progression systems.",
    technologies: ["Java", "WorldEdit API", "JSON Configuration"],
    link: "#"
  },
  {
    id: 6,
    title: "GuildCraft Website",
    category: "Web Design",
    image: "/lovable-uploads/ef54aa99-66b6-4102-a3a2-ddebea05dfca.png",
    description: "Custom website for a Minecraft server network with store integration, player profiles, and responsive design.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe API"],
    link: "#"
  }
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);

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

    projectRefs.current.forEach((project, index) => {
      if (project) {
        project.style.transitionDelay = `${100 + index * 100}ms`;
        observer.observe(project);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProjectModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 opacity-0"
      style={{ transitionDelay: '100ms' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <p className="text-sm font-medium text-white/80">Portfolio</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My Recent <span className="text-minecraft-purple">Projects</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A showcase of my work spanning Minecraft development, web applications, and more.
            Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="portfolio-card opacity-0"
              style={{ animation: 'none' }}
              onClick={() => openProjectModal(project)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="portfolio-card-overlay">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.category}</p>
                  <button
                    className="px-4 py-2 bg-minecraft-purple hover:bg-minecraft-purple/90 text-white font-medium rounded-lg transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div
            className="absolute inset-0"
            onClick={closeProjectModal}
          ></div>
          <div className="relative bg-minecraft-black border border-white/10 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <div className="aspect-video">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">{selectedProject.title}</h3>
                    <p className="text-minecraft-purple">{selectedProject.category}</p>
                  </div>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      View Live
                    </a>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase text-white/50 mb-2">About</h4>
                <p className="text-white/80">{selectedProject.description}</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase text-white/50 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
