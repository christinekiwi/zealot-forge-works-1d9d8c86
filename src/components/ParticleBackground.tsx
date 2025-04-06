
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  element: HTMLDivElement;
  randomX: number;
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const numParticles = window.innerWidth < 768 ? 10 : 25;
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      createParticle(container);
    }
    
    // Animation loop
    const animate = () => {
      particlesRef.current.forEach(particle => {
        // Move particle upward
        particle.y -= particle.speedY;
        particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
        
        // Reset particle when it goes out of view
        if (particle.y < -particle.size) {
          resetParticle(particle, container);
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      particlesRef.current.forEach(particle => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
      
      particlesRef.current = [];
    };
  }, []);
  
  const createParticle = (container: HTMLDivElement) => {
    const element = document.createElement('div');
    element.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    const opacity = Math.random() * 0.5 + 0.1;
    const x = Math.random() * container.offsetWidth;
    const y = Math.random() * container.offsetHeight + container.offsetHeight;
    const speedY = Math.random() * 0.5 + 0.1;
    const randomX = (Math.random() - 0.5) * 100;
    
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.opacity = opacity.toString();
    element.style.transform = `translate(${x}px, ${y}px)`;
    element.style.setProperty('--random-x', `${randomX}px`);
    
    container.appendChild(element);
    
    const particle: Particle = {
      x,
      y,
      size,
      speedY,
      opacity,
      element,
      randomX
    };
    
    particlesRef.current.push(particle);
  };
  
  const resetParticle = (particle: Particle, container: HTMLDivElement) => {
    particle.x = Math.random() * container.offsetWidth;
    particle.y = container.offsetHeight + particle.size;
    particle.randomX = (Math.random() - 0.5) * 100;
    particle.element.style.setProperty('--random-x', `${particle.randomX}px`);
  };
  
  return <div ref={containerRef} className="particles-container" />;
};

export default ParticleBackground;
