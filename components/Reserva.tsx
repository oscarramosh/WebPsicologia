"use client";

import { useState } from "react";

function CalendlyModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÓN */}
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-[#4a6741] text-white py-4 rounded-lg uppercase text-sm tracking-widest hover:bg-[#6b8f62] transition"
      >
        Agendar sesión →
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* FONDO */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* CONTENEDOR */}
          <div className="relative bg-white w-[95%] md:w-[800px] h-[80vh] rounded-2xl shadow-xl overflow-hidden">

            {/* CERRAR */}
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

export default function Reserva() {
  return (
    <section className="bg-[#f7f5f0] py-24 px-10" id="reserva">
      
      {/* HEADER */}
      <div className="mb-14">
        <p className="uppercase text-xs tracking-[0.2em] text-[#6b8f62] mb-3">
          Agenda tu hora
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Da el primer <span className="italic text-[#6b8f62]">paso</span>
        </h2>

        <p className="text-gray-500 max-w-xl leading-relaxed">
          Agenda directamente una sesión según tu disponibilidad.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-16">

        {/* 🔥 REEMPLAZO AQUÍ */}
        <div className="space-y-4">
          <p className="text-gray-600">
            Selecciona un horario disponible y agenda tu sesión de forma simple y confidencial.
          </p>

          <CalendlyModal />
        </div>

        {/* 👇 TODO ESTO SE MANTIENE IGUAL (NO TOCAR) */}
        <div className="space-y-6">

          {/* TARJETA INFO */}
          <div className="bg-white border border-[#e5e3dc] rounded-xl p-6 shadow-sm">
            <h3 className="font-serif text-xl mb-5">
              Información de sesiones
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Duración</span>
                <span>50 minutos</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Modalidad</span>
                <span>Online</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Respuesta</span>
                <span>24 horas</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Toda la información es confidencial.
            </p>
          </div>

          {/* TARJETA CONTACTO */}
          <div className="bg-white border border-[#e5e3dc] rounded-xl p-6 shadow-sm">
            <h3 className="font-serif text-xl mb-5">
              Contacto directo
            </h3>

            <div className="space-y-2 text-sm">
              <p>WhatsApp: +56 9 81513100</p>
              <p>Email: psicologa.paulinahernandez@gmail.com</p>
              <p>Instagram: @psico.paulinahernandez</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}