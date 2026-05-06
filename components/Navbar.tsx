"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative w-full h-[120px]">

        {/* ✅ TU FOTO COMO BANNER */}
        <img
          src="/pauli.jpeg"
          alt="La Ruta de una Psicóloga"
          className="w-full h-full block opacity-80"
        />

        {/* 🔥 OVERLAY SUAVE PARA LEGIBILIDAD */}
        <div className="absolute inset-0 bg-white/30"></div>

        {/* MENÚ */}
        <div className="absolute inset-0 flex items-center justify-end px-6 md:px-10">
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-[#2F3A3F]">
            
            <a href="#servicios" className="hover:text-[#3E5C50] transition">
              Servicios
            </a>

            <a href="#sobre" className="hover:text-[#3E5C50] transition">
              Sobre mí
            </a>

            <a href="#investigacion" className="hover:text-[#3E5C50] transition">
              Investigación
            </a>

          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-[#2F3A3F]"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE */}
      {open && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col gap-4 text-sm shadow-md">
          <a onClick={() => setOpen(false)}>Servicios</a>
          <a onClick={() => setOpen(false)}>Sobre mí</a>
          <a onClick={() => setOpen(false)}>Investigación</a>
          <a className="bg-[#3E5C50] text-white px-4 py-2 rounded text-center">
            Reservar
          </a>
        </div>
      )}
    </nav>
  );
}