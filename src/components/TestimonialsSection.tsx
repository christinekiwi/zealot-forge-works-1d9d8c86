
import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  delay: number;
}

const TestimonialCard = ({ content, author, role, rating, delay }: TestimonialCardProps) => {
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
    <div 
      ref={cardRef} 
      className="glass p-6 relative opacity-0"
      style={{ animation: 'none' }}
    >
      <div className="absolute -top-3 -left-3 p-2 bg-minecraft-purple/20 backdrop-blur-sm rounded-full">
        <Quote size={20} className="text-minecraft-purple" />
      </div>
      
      <p className="text-white/80 mb-4">{content}</p>
      
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-white/60">{role}</p>
        </div>
        
        <div className="flex mt-2 sm:mt-0">
          {[...Array(5)].map((_, index) => (
            <Star 
              key={index} 
              size={16} 
              className={index < rating ? "text-minecraft-purple fill-minecraft-purple" : "text-white/30"} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      content: "Zealot set up our Lifesteal server with incredible attention to detail. The custom plugins and performance optimizations exceeded our expectations. Highly recommended!",
      author: "MinecraftPro",
      role: "Server Owner",
      rating: 5
    },
    {
      content: "Working with Zealot transformed our basic survival server into a thriving community. The shop configuration and custom features gave us exactly what we needed.",
      author: "CraftMaster",
      role: "Community Manager",
      rating: 5
    },
    {
      content: "The performance enhancements Zealot implemented on our server were game-changing. We went from constant lag issues to a smooth experience for over 100 players simultaneously.",
      author: "BlockBuildersGuild",
      role: "Admin Team",
      rating: 4
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 opacity-0 relative overflow-hidden"
      style={{ transitionDelay: '100ms' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <p className="text-sm font-medium text-white/80">Testimonials</p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
            Client <span className="text-minecraft-purple">Feedback</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Here's what clients say about my services and the results they've achieved.
          </p>
        </div>

        {/* 3D Anime Character */}
        <div className="absolute left-0 top-1/3 md:left-10 md:top-1/2 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 opacity-80 animate-float" style={{ animationDelay: "1s" }}>
          <img 
            src="/lovable-uploads/9ff5a1ad-0fe7-425d-8b77-f4fd76fd3d08.png" 
            alt="Anime character" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
              delay={100 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
