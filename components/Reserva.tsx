"use client";

import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

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
          Puedes seleccionar un horario disponible directamente en el calendario.
          Un espacio confidencial y sin compromiso.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* 🟢 RESERVA */}
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Puedes revisar los horarios disponibles y agendar tu sesión de forma simple y confidencial.
          </p>

          <a
            href="/agenda"
            className="inline-block bg-[#4a6741] text-white px-8 py-4 rounded-lg uppercase text-sm tracking-widest hover:bg-[#6b8f62] transition"
          >
            Reserva aquí tu sesión
          </a>
        </div>

        {/* 🔵 CONTACTO */}
        <div className="space-y-6">

          <div className="bg-white border border-[#e5e3dc] rounded-xl p-6 shadow-sm">
            <h3 className="font-serif text-xl mb-5">
              Contacto directo
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-600 text-lg" />
                <span>+56 9 81513100</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-600 text-lg" />
                <span>psicologa.paulinahernandez@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaInstagram className="text-pink-500 text-lg" />
                <span>@psico.paulinahernandez</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}