import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BrandsSection from "@/components/sections/BrandsSection";
import TrustSection from "@/components/sections/TrustSection";
import ContactSection from "@/components/sections/ContactSection";

// Newly added imports
import  TeamSection  from "@/components/sections/TeamSection";
import  TestimonialsSection  from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[104px]">
        <HeroSection />
        <BrandsSection /> 
        <CategoriesSection />
        <ProductsSection />
        <TestimonialsSection />
        <ServicesSection />
        <TrustSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;