import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "919691365052";
  const message = encodeURIComponent(
    "Hello Patel Electronics Kareli, I need assistance with your products or repair services."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping"></span>

      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full 
        bg-gradient-to-br from-[#25D366] to-[#1ebe5d]
        shadow-xl hover:shadow-2xl
        transition-all duration-300
        group-hover:scale-110
        active:scale-95"
      >
        <MessageCircle className="w-7 h-7 text-white" />

        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 flex items-center justify-center 
          w-5 h-5 text-[10px] font-bold text-white 
          bg-red-500 rounded-full shadow-md">
          1
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
