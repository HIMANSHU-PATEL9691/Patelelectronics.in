import { Link } from "react-router-dom";
import { ChevronRight, Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
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

  const phoneNumber = "+919876543210";
  const whatsappNumber = "919876543210";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with form data
    const message = encodeURIComponent(
      `Hello Patel Electronics!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    
    toast({
      title: "Opening WhatsApp",
      description: "Please send the message to complete your enquiry.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Shop No. 12, Main Market", "Your City, State - 380001"],
      action: null,
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: `tel:${phoneNumber}`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+91 98765 43210", "Quick Response Guaranteed"],
      action: `https://wa.me/${whatsappNumber}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@patelelectronics.in", "support@patelelectronics.in"],
      action: "mailto:info@patelelectronics.in",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 10:00 AM - 9:00 PM", "Sunday: Closed"],
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
              <Link to="/" className="hover:text-accent">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Contact</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Have questions? We'd love to hear from you. Contact us via call, WhatsApp, or visit our store.
            </p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 card-shadow border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                      {info.action && (
                        <a
                          href={info.action}
                          target={info.action.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-accent text-sm font-medium hover:underline mt-2 inline-block"
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
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Your Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" variant="whatsapp" size="lg" className="flex-1">
                      <Send className="w-5 h-5" />
                      Send via WhatsApp
                    </Button>
                    <Button type="button" variant="call" size="lg" className="flex-1" asChild>
                      <a href={`tel:${phoneNumber}`}>
                        <Phone className="w-5 h-5" />
                        Call Instead
                      </a>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <div className="bg-card rounded-2xl overflow-hidden card-shadow border border-border">
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-bold font-heading text-foreground">Find Us on Map</h2>
                <p className="text-muted-foreground text-sm">Visit our store for the best experience</p>
              </div>
              <div className="h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8440695872986!2d72.5713621!3d23.0225539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
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
