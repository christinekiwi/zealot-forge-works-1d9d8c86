
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import MobileNavigation from "@/components/MobileNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <PortfolioSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <MobileNavigation />
    </div>
  );
};

export default Index;
