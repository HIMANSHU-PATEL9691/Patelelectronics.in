import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "919876543210";
  const message = encodeURIComponent("Hello Patel Electronics, I need assistance with your products/services.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-subtle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
        1
      </span>
    </a>
  );
};

export default WhatsAppButton;
