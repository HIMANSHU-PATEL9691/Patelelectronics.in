import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const phoneNumber = "+919691365052";
  const whatsappNumber = "919691365052";

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our store or contact us for any enquiries. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-muted rounded-2xl overflow-hidden h-[400px] card-shadow border border-border">
            <iframe
              src="https://www.google.com/maps?q=Patel+Electronics+Kareli+Madhya+Pradesh&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Patel Electronics Kareli Location"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
            <h3 className="text-2xl font-bold font-heading text-foreground mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Store Address
                  </h4>
                  <p className="text-muted-foreground">
                    Ganesh Ward, Kareli High School Road<br />
                    Kareli Main Rd, Kareli<br />
                    Madhya Pradesh – 487221
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Business Hours
                  </h4>
                  <p className="text-muted-foreground">
                    Monday – Saturday: 10:00 AM – 9:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a
                    href="mailto:patelhimanshu6006@gmail.com"
                    className="text-accent hover:underline"
                  >
                    patelhimanshu6006@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-muted-foreground mb-4">
                Contact us directly:
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
                    href={`https://wa.me/${whatsappNumber}?text=Hello%20Patel%20Electronics%20Kareli,%20I%20have%20an%20enquiry.`}
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
