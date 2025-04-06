
import { useEffect, useRef, useState } from 'react';
import { Github, Mail, MessageSquare, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 opacity-0"
      style={{ transitionDelay: '100ms' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <p className="text-sm font-medium text-white/80">Contact</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Let's <span className="text-minecraft-purple">Connect</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'm always open to discussing
            new opportunities and ideas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="glass p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-minecraft-purple/20">
                    <Mail size={20} className="text-minecraft-purple" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase text-white/50 mb-1">Email</h4>
                    <a 
                      href="mailto:contact@zealot.dev" 
                      className="text-white hover:text-minecraft-purple transition-colors"
                    >
                      contact@zealot.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-minecraft-purple/20">
                    <MessageSquare size={20} className="text-minecraft-purple" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase text-white/50 mb-1">Discord</h4>
                    <p className="text-white">zealot#1234</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-minecraft-purple/50 text-white/70 hover:text-minecraft-purple transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://discord.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-minecraft-purple/50 text-white/70 hover:text-minecraft-purple transition-all"
                    aria-label="Discord"
                  >
                    <MessageSquare size={24} />
                  </a>
                  <a 
                    href="mailto:contact@zealot.dev"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-minecraft-purple/50 text-white/70 hover:text-minecraft-purple transition-all"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass p-8">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm uppercase text-white/50 mb-1 block">
                    Your Name <span className="text-minecraft-purple">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-minecraft-purple/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm uppercase text-white/50 mb-1 block">
                    Your Email <span className="text-minecraft-purple">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-minecraft-purple/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm uppercase text-white/50 mb-1 block">
                    Your Message <span className="text-minecraft-purple">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-minecraft-purple/50 transition-colors resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 bg-minecraft-purple hover:bg-minecraft-purple/90 text-white font-medium rounded-lg transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
