
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5544999900681?text=Olá! Gostaria de solicitar um orçamento para meu projeto."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 whatsapp-pulse"
      title="Conversar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppFloat;
