import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import your background images
import bg1 from "@/assets/images/image.png";
import bg2 from "@/assets/images/image1.png";
import bg3 from "@/assets/images/image2.png";

const images = [bg1, bg2, bg3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phoneNumber = "+919691365052";
  const whatsappNumber = "919691365052";

  // Auto-rotate logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Changes image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[650px] lg:min-h-[850px] flex items-center overflow-hidden">
      
      {/* --- AUTO-ROTATING BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* mode="wait" */}
        <AnimatePresence >
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]" />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white font-medium uppercase tracking-wider text-[10px]">Serving Since 2015</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight text-white">
              Your Trusted <br />
              <span className="text-blue-400">Electronics</span> Store
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl">
              Quality products, expert repairs, and trusted service. From mobile phones to home appliances, 
              we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="xl" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8" asChild>
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Side Visual (Glass Cards) */}
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                {['Mobiles', 'TVs', 'Laptops', 'Repairs'].map((item, i) => (
                  <div key={item} className="bg-white/5 p-6 rounded-2xl text-center border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-4xl block mb-2">{['📱', '📺', '💻', '🔧'][i]}</span>
                    <span className="text-white font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* --- PROGRESS DOTS --- */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? "w-8 bg-blue-500" : "w-2 bg-white/30"}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;