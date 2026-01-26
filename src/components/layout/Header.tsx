import {
  Phone,
  MessageCircle,
  Menu,
  X,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "+919691365052";
  const whatsappNumber = "919691365052";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  // ✅ Close menu on outside click
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border"
    >
      {/* 🔹 Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">
              Ganesh Ward Kareli High School Road, Kareli Main Rd, Kareli, MP 487221
            </span>
            <span className="sm:hidden">Kareli</span>
          </div>
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-1 hover:text-accent transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+91 9691365052</span>
          </a>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <div className="container py-3">
        <div className="flex items-center justify-between">
          
          {/* ✅ Logo with Image */}
         <Link to="/" className="flex items-center gap-3">
  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center">
    <img
      src="/favicon.ico"
      alt="Patel Electronics Logo"
      className="w-full h-full object-contain"
    />
  </div>

  <div className="hidden sm:block">
    <h1 className="text-lg font-bold">Patel Electronics</h1>
    <p className="text-xs text-muted-foreground">
      Your Trusted Partner
    </p>
  </div>
</Link>

          {/* 🔹 Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 🔹 Right Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Desktop Buttons */}
            <div className="hidden md:flex gap-2">
              <Button variant="call" size="sm" asChild>
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </Button>

              <Button variant="whatsapp" size="sm" asChild>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* 📞 Mobile Buttons */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="call" size="sm" className="flex-1" asChild>
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                </Button>

                <Button
                  variant="whatsapp"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
