import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle, CheckCircle, Smartphone, Tv, Monitor, Refrigerator, WashingMachine, Wind } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const iconMap: { [key: string]: any } = {
  Smartphone,
  Tv,
  Monitor,
  Refrigerator,
  WashingMachine,
  Wind,
};

const ServicesPage = () => {
  const whatsappNumber = "919876543210";

  const handleBookService = (serviceName: string) => {
    const message = encodeURIComponent(`Hello Patel Electronics, I want to book ${serviceName} service. Please assist.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const features = [
    "Same Day Service Available",
    "Genuine Spare Parts",
    "90 Days Warranty on Repairs",
    "Experienced Technicians",
    "Home Service Available",
    "Affordable & Transparent Pricing",
    "All Major Brands Supported",
    "Free Diagnosis",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[104px]">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-accent">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Services</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
              Expert Repair Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Professional repair services for all your electronics. Fast, reliable, and affordable with 90-day warranty.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="container py-12">
          <div className="bg-card rounded-3xl p-8 md:p-12 card-shadow border border-border">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-8 text-center">
              Why Choose Our Repair Services?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container py-12">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Smartphone;
              return (
                <div
                  key={service.id}
                  className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">{service.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.shortDescription}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-primary">{service.price}</span>
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Common Issues:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.commonIssues.slice(0, 3).map((issue, idx) => (
                        <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full">
                          {issue}
                        </span>
                      ))}
                      {service.commonIssues.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{service.commonIssues.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Brands We Service:</p>
                    <p className="text-sm text-foreground">{service.brands.slice(0, 4).join(", ")}</p>
                  </div>

                  <Button
                    variant="whatsapp"
                    className="w-full"
                    onClick={() => handleBookService(service.name)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book Service
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container py-12">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Need Help With Your Device?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Don't worry! Contact us now and get your device repaired by our expert technicians. 
              Quick turnaround with 90-day warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => handleBookService("repair")}>
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+919876543210">
                  Call: +91 98765 43210
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
