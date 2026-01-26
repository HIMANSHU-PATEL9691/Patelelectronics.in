import { Link } from "react-router-dom";
import {
  ChevronRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const phoneNumber = "+919691365052";
  const whatsappNumber = "919691365052";

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Ganesh Ward, Kareli High School Road",
        "Kareli Main Rd, Kareli",
        "Madhya Pradesh - 487221",
      ],
      action: null,
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9691365052"],
      action: `tel:${phoneNumber}`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+91 9691365052", "Quick Response Guaranteed"],
      action: `https://wa.me/${whatsappNumber}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["patelelectronics888@gmail.com"],
      action: "mailto:patelelectronics888@gmail.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon – Sat: 10:00 AM – 9:00 PM", "Sunday: Closed"],
      action: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-[104px]">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-accent">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Contact</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Contact Patel Electronics
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Call, WhatsApp, or visit our Kareli store for electronics sales and repairs.
            </p>
          </div>
        </div>

        <div className="container py-12">
          {/* Contact Info + Actions */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border card-shadow"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                      {info.action && (
                        <a
                          href={info.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-accent font-medium hover:underline"
                        >
                          Contact Now →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl p-8 border border-border card-shadow flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">
                Contact Us Instantly
              </h2>
              <p className="text-muted-foreground mb-6">
                For quick support and enquiries, reach us directly using the options below.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="call" size="lg" className="flex-1" asChild>
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>

                <Button variant="whatsapp" size="lg" className="flex-1" asChild>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="bg-card rounded-2xl overflow-hidden border border-border card-shadow">
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-bold">Find Us on Map</h2>
                <p className="text-sm text-muted-foreground">
                  Patel Electronics – Kareli, Madhya Pradesh
                </p>
              </div>

              <div className="h-[400px]">
                <iframe
                  src="https://www.google.com/maps?q=Patel+Electronics+Kareli+Madhya+Pradesh&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Patel Electronics Kareli Map"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
