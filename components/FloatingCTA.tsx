"use client";

import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  // aparece después de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 max-w-sm bg-white shadow-2xl rounded-2xl p-6 z-50 border border-[#e0ddd6] animate-fadeIn">
      
      {/* cerrar */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-black"
      >
        ✕
      </button>

      {/* contenido */}
      <h3 className="text-xl font-serif mb-2">
        Comienza tu camino
      </h3>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        Estás a un paso de comenzar tu transformación personal. 
        Un espacio seguro donde sanar y reconectar contigo mismo.
      </p>

      {/* CTA */}
      <a
        href="#reserva"
        className="block bg-green-700 text-white text-center py-3 rounded-lg mb-3 hover:bg-green-800 transition"
      >
        Agenda tu primera llamada gratuita
      </a>

      <p className="text-xs text-gray-400 text-center">
        Sin compromiso • 15 minutos • Totalmente confidencial
      </p>
    </div>
  );
}