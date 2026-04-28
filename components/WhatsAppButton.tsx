



import { Phone } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/56981513100?text=Hola%20quiero%20agendar%20una%20sesión"
      target="_blank"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg z-50 transition"
    >
      <Phone size={26} className="text-white" />
    </a>
  );
}