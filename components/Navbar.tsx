"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fdfcf8]/90 backdrop-blur border-b border-[#e0ddd6] px-10 h-[68px] flex items-center justify-between">
      
      <div className="font-serif text-xl">
        <span className="text-green-700 font-semibold">
  Psicóloga Paulina Hernández
</span>
      </div>

      <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-500">
        <a href="#servicios">Servicios</a>
        <a href="#sobre">Sobre mí</a>
        <a href="#investigacion">Investigación</a>
        <a href="#reserva" className="bg-green-700 text-white px-4 py-2 rounded">
          Reservar
        </a>
      </div>

      <button onClick={() => setOpen(!open)} className="md:hidden">
        ☰
      </button>

      {open && (
        <div className="absolute top-[68px] left-0 w-full bg-white p-6 flex flex-col gap-4">
          <a href="#servicios">Servicios</a>
          <a href="#sobre">Sobre mí</a>
          <a href="#reserva">Reservar</a>
        </div>
      )}
    </nav>
  );
}