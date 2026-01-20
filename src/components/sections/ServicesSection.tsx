import { Smartphone, Tv, Monitor, Refrigerator, WashingMachine, Speaker, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Mobile Repair", icon: Smartphone, description: "Screen, battery, charging port repairs" },
  { name: "TV Repair", icon: Tv, description: "LED, LCD, Smart TV all brands" },
  { name: "Laptop Repair", icon: Monitor, description: "Hardware & software issues" },
  { name: "Refrigerator Repair", icon: Refrigerator, description: "Cooling, compressor, gas refill" },
  { name: "Washing Machine Repair", icon: WashingMachine, description: "Motor, drum, water issues" },
  { name: "Speaker Repair", icon: Speaker, description: "Amplifiers, sound systems" },
];

const features = [
  "Same Day Service Available",
  "Genuine Spare Parts",
  "90 Days Warranty on Repairs",
  "Experienced Technicians",
  "Home Service Available",
  "Affordable Prices",
];

const ServicesSection = () => {
  const whatsappNumber = "919876543210";
  const message = encodeURIComponent("Hello Patel Electronics, I want to book a repair service for my device.");

  return (
    <section id="services" className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Expert Repair Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional repair services for all electronics. Fast, reliable, and affordable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="bg-card rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold font-heading text-foreground text-sm mb-1">
                  {service.name}
                </h3>
                <p className="text-xs text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Features & CTA */}
          <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
            <h3 className="text-2xl font-bold font-heading text-foreground mb-6">
              Why Choose Our Repair Services?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="whatsapp" size="lg" className="w-full" asChild>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Book Service on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
