"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Bot } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: "bottom-right" | "bottom-left";
  showOnMobile?: boolean;
}

export default function WhatsAppButton({
  phoneNumber,
  message = "Hola, necesito ayuda con...",
  position = "bottom-right",
  showOnMobile = true,
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    setIsChatOpen(true);
  };

  const handleContactClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
    setIsChatOpen(false);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  if (!isVisible) return null;

  const positionClasses = {
    "bottom-right": "right-4 bottom-4",
    "bottom-left": "left-4 bottom-4",
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className={`fixed ${positionClasses[position]} z-50 flex items-center justify-center p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 ${
          !showOnMobile ? "hidden md:flex" : "flex"
        }`}
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {isChatOpen && (
        <div
          className={`fixed ${positionClasses[position]} z-50 w-80 bg-white rounded-lg shadow-xl border border-gray-200 transform transition-all duration-300 ${
            isChatOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-gray-600" />
              <span className="text-sm font-semibold text-gray-800">Asistente Camionar</span>
            </div>
            <button
              onClick={handleCloseChat}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Cerrar chat"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <div className="flex items-start gap-3">
              <Bot className="h-8 w-8 text-green-500 flex-shrink-0" />
              <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-800">
                ¿Quieres contactarnos a nuestro WhatsApp?
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleContactClick}
              className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-semibold text-sm hover:bg-green-600 transition-all duration-200"
            >
              Contactar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}