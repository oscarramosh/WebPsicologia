"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
     <nav className="fixed top-0 w-full z-50 bg-[#fdfcf8]/90 backdrop-blur border-b border-[#e0ddd6] px-6 md:px-10 h-[110px] flex items-center justify-between overflow-visible">
      
      {/* LOGO + NOMBRE */}
      <div className="flex items-center gap-3">
      <Image
  src="/logo.png"
  alt="Logo"
  width={95}
  height={95}
  className="object-contain -translate-y-2"
 />

        <span className="text-[#4a6741] font-semibold font-serif text-base md:text-lg tracking-wide">
          Psicóloga Paulina Hernández
        </span>
      </div>

      {/* MENÚ DESKTOP */}
      <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-gray-500">
        
        <a href="#servicios" className="hover:text-[#6b8f62] transition">
          Servicios
        </a>

        <a href="#sobre" className="hover:text-[#6b8f62] transition">
          Sobre mí
        </a>

        <a href="#investigacion" className="hover:text-[#6b8f62] transition">
          Investigación
        </a>

        <a
          href="#reserva"
          className="bg-[#4a6741] text-white px-4 py-2 rounded-md hover:bg-[#6b8f62] transition"
        >
          Reservar
        </a>

      </div>

      {/* BOTÓN MOBILE */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-xl"
      >
        ☰
      </button>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="absolute top-[68px] left-0 w-full bg-white border-t border-[#e0ddd6] p-6 flex flex-col gap-4 text-sm shadow-md">
          
          <a href="#servicios" onClick={() => setOpen(false)}>
            Servicios
          </a>

          <a href="#sobre" onClick={() => setOpen(false)}>
            Sobre mí
          </a>

          <a href="#investigacion" onClick={() => setOpen(false)}>
            Investigación
          </a>

          <a
            href="#reserva"
            onClick={() => setOpen(false)}
            className="bg-[#4a6741] text-white px-4 py-2 rounded text-center"
          >
            Reservar
          </a>

        </div>
      )}
    </nav>
  );
}