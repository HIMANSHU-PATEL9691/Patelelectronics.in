import { Phone, MessageCircle, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const phoneNumber = "+919876543210";
  const whatsappNumber = "919876543210";

  return (
    <section className="relative min-h-[650px] lg:min-h-[750px] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm border border-accent/20">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-medium">Serving Since 2015</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-foreground">
              Your Trusted{" "}
              <span className="text-gradient">Electronics</span>{" "}
              Store & Service Center
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Quality products, expert repairs, and trusted service. From mobile phones to home appliances, 
              we've got you covered with genuine products at the best prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" asChild>
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="w-5 h-5" />
                  Call Now
                  <ChevronRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20Patel%20Electronics%2C%20I%20am%20interested%20in%20your%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-foreground">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-accent">Same Day</div>
                <div className="text-sm text-muted-foreground">Repair Service</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 glass-card rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <Link to="/products?category=mobiles" className="group bg-muted/50 hover:bg-muted rounded-2xl p-6 text-center transition-all hover:scale-105">
                  <div className="text-5xl mb-3">📱</div>
                  <div className="font-semibold text-foreground">Mobiles</div>
                  <div className="text-sm text-muted-foreground">50+ Products</div>
                </Link>
                <Link to="/products?category=televisions" className="group bg-muted/50 hover:bg-muted rounded-2xl p-6 text-center transition-all hover:scale-105">
                  <div className="text-5xl mb-3">📺</div>
                  <div className="font-semibold text-foreground">TVs</div>
                  <div className="text-sm text-muted-foreground">30+ Products</div>
                </Link>
                <Link to="/products?category=laptops" className="group bg-muted/50 hover:bg-muted rounded-2xl p-6 text-center transition-all hover:scale-105">
                  <div className="text-5xl mb-3">💻</div>
                  <div className="font-semibold text-foreground">Laptops</div>
                  <div className="text-sm text-muted-foreground">25+ Products</div>
                </Link>
                <Link to="/services" className="group bg-accent/10 hover:bg-accent/20 rounded-2xl p-6 text-center transition-all hover:scale-105 border border-accent/30">
                  <div className="text-5xl mb-3">🔧</div>
                  <div className="font-semibold text-accent">Repairs</div>
                  <div className="text-sm text-muted-foreground">All Brands</div>
                </Link>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
