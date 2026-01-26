import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const phoneNumber = "+919691365052";
  const whatsappNumber = "919691365052";

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* 🔹 About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Logo */}
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-sm border border-border">
                <img
                  src="/favicon.ico"
                  alt="Patel Electronics Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold font-heading text-foreground">
                Patel Electronics
              </h3>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted electronics store and service center. Serving customers
              with quality products and reliable repair services for over 10 years.
            </p>

            {/* 🔹 Social Media */}
            <div className="flex items-center gap-4 mt-5">
              {/* <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-muted text-foreground hover:bg-accent hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a> */}

              <a
                href="https://www.instagram.com/patel_electronics_kareli/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-muted text-foreground hover:bg-accent hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-full bg-muted text-foreground hover:bg-accent hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* 🔹 Quick Links */}
          <div>
            <h4 className="font-bold font-heading text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* 🔹 Categories */}
          <div>
            <h4 className="font-bold font-heading text-foreground mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=mobiles" className="text-muted-foreground hover:text-accent transition-colors">Mobile Phones</Link></li>
              <li><Link to="/products?category=televisions" className="text-muted-foreground hover:text-accent transition-colors">Televisions</Link></li>
              <li><Link to="/products?category=refrigerators" className="text-muted-foreground hover:text-accent transition-colors">Refrigerators</Link></li>
              <li><Link to="/products?category=washing-machines" className="text-muted-foreground hover:text-accent transition-colors">Washing Machines</Link></li>
              <li><Link to="/products?category=laptops" className="text-muted-foreground hover:text-accent transition-colors">Laptops</Link></li>
            </ul>
          </div>

          {/* 🔹 Contact Info */}
          <div>
            <h4 className="font-bold font-heading text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Ganesh Ward Kareli High School Road, Kareli Main Rd,
                  Kareli, Madhya Pradesh 487221
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  +91 9691365052
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-accent shrink-0" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:patelhimanshu6006@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  patelhimanshu6006@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">
                  Mon - Sat: 10AM - 9PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 🔹 Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Patel Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
