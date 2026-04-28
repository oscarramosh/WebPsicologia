"use client";

import { Camera, Mail, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

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
          Completa el formulario y me pondré en contacto contigo en menos de 24 horas
          para confirmar tu sesión.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-16">

        {/* FORMULARIO */}
        <form className="space-y-4">

          <div className="grid grid-cols-2 gap-4">
            <input className="p-3 border border-[#e0ddd6] rounded-lg" placeholder="Nombre" />
            <input className="p-3 border border-[#e0ddd6] rounded-lg" placeholder="Apellido" />
          </div>

          <input className="w-full p-3 border border-[#e0ddd6] rounded-lg" placeholder="Correo electrónico" />

          <input className="w-full p-3 border border-[#e0ddd6] rounded-lg" placeholder="Teléfono (opcional)" />

          <select className="w-full p-3 border border-[#e0ddd6] rounded-lg">
            <option>Modalidad de sesión</option>
            <option>Online</option>
          </select>

          <select className="w-full p-3 border border-[#e0ddd6] rounded-lg">
            <option>Motivo de consulta</option>
            <option>Ansiedad</option>
            <option>Depresión</option>
            <option>Duelo</option>
          </select>

          <textarea
            className="w-full p-3 border border-[#e0ddd6] rounded-lg"
            placeholder="Cuéntame un poco de tu situación..."
          />

          <button className="w-full bg-[#4a6741] text-white py-4 rounded-lg uppercase text-sm tracking-widest hover:bg-[#6b8f62] transition">
            Solicitar hora →
          </button>
        </form>

        {/* INFO */}
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

            <div className="space-y-4 text-sm">

              {/* WHATSAPP */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#eef2ed] flex items-center justify-center">
                  <Phone size={16} className="text-[#6b8f62]" />
                </div>
                <span className="text-gray-700">
                  +56 9 81513100
                </span>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#eef2ed] flex items-center justify-center">
                  <Mail size={16} className="text-[#6b8f62]" />
                </div>
                <span className="text-gray-700">
                  psicologa.paulinahernandez@gmail.com
                </span>
              </div>

              {/* INSTAGRAM */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#eef2ed] flex items-center justify-center">
                  <FaInstagram className="text-[#6b8f62] group-hover:scale-110 transition" size={16} />
                </div>
                <a
                  href="https://instagram.com/psico.paulinahernandez"
                  target="_blank"
                  className="text-gray-700 hover:text-[#6b8f62] transition"
                >
                  @psico.paulinahernandez
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}