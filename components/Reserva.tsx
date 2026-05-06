"use client";

import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Reserva() {
  return (
    <section className="bg-[#f7f5f0] py-16 px-6 md:px-10" id="reserva">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <p className="uppercase text-xs tracking-[0.2em] text-[#6b8f62] mb-2">
            Agenda tu hora
          </p>

          <h2 className="text-3xl md:text-4xl font-serif mb-3 leading-tight">
            Da el primer <span className="italic text-[#6b8f62]">paso</span>
          </h2>

          <p className="text-gray-500 max-w-lg leading-relaxed text-sm">
            Puedes seleccionar un horario disponible directamente en el calendario.
            Un espacio confidencial y sin compromiso.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* 🟢 RESERVA */}
          <div className="space-y-4 max-w-sm">
            <p className="text-gray-600 text-sm">
              Revisa disponibilidad y agenda tu sesión de forma simple.
            </p>

            <a
              href="/agenda"
              className="inline-block bg-[#4a6741] text-white px-5 py-3 rounded-lg text-xs tracking-widest hover:bg-[#6b8f62] transition"
            >
              RESERVAR SESIÓN
            </a>
          </div>

          {/* 🔵 CONTACTO (ALINEADO ARRIBA) */}
          <div className="flex justify-start md:justify-end">

            <div className="bg-white border border-[#e5e3dc] rounded-xl p-5 shadow-sm w-full max-w-xs -mt-2">
              
              <h3 className="font-serif text-lg mb-4">
                Contacto directo
              </h3>

              <div className="space-y-3 text-sm">

                <a
                  href="https://wa.me/56981513100?text=Hola%20quiero%20agendar%20una%20sesión"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-[#6b8f62] transition"
                >
                  <FaWhatsapp className="text-green-600 text-base" />
                  <span>+56 9 81513100</span>
                </a>

                <a
                  href="mailto:psicologa.paulinahernandez@gmail.com"
                  className="flex items-center gap-3 hover:text-[#6b8f62] transition"
                >
                  <FaEnvelope className="text-gray-600 text-base" />
                  <span>Email</span>
                </a>

                <a
                  href="https://instagram.com/psico.paulinahernandez"
                  target="_blank"
                  className="flex items-center gap-3 hover:text-[#6b8f62] transition"
                >
                  <FaInstagram className="text-pink-500 text-base" />
                  <span>Instagram</span>
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}