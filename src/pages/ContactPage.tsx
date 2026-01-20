import { Link } from "react-router-dom";
import {
  ChevronRight,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const phoneNumber = "+919691365052";
  const whatsappNumber = "919691365052";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Hello Patel Electronics Kareli!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    toast({
      title: "Opening WhatsApp",
      description: "Please send the message to complete your enquiry.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      details: ["patelhimanshu6006@gmail.com"],
      action: "mailto:patelhimanshu6006@gmail.com",
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
              Need help with electronics sales or repair? Call, WhatsApp, or visit
              our Kareli store.
            </p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
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

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 border border-border card-shadow">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <Input
                      name="subject"
                      placeholder="Subject *"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="whatsapp" size="lg" className="flex-1">
                      <Send className="w-5 h-5" />
                      Send via WhatsApp
                    </Button>

                    <Button type="button" variant="call" size="lg" className="flex-1" asChild>
                      <a href={`tel:${phoneNumber}`}>
                        <Phone className="w-5 h-5" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </form>
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
