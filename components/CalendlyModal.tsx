"use client";

import { useState } from "react";

export default function CalendlyModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÓN */}
      <button
        onClick={() => setOpen(true)}
        className="bg-[#4a6741] text-white px-6 py-3 rounded-md hover:bg-[#6b8f62] transition"
      >
        Agendar sesión
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* FONDO OSCURO */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* CONTENEDOR */}
          <div className="relative bg-white w-[95%] md:w-[800px] h-[80vh] rounded-2xl shadow-xl overflow-hidden">

            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* CALENDLY */}
            <iframe
              src="https://calendly.com/TU-USUARIO/tu-evento"
              width="100%"
              height="100%"
              className="border-0"
            />

          </div>

        </div>
      )}
    </>
  );
}