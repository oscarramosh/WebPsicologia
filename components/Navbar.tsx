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
        setShow(false); // baja → oculta
      } else {
        setShow(true); // sube → muestra
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
      {/* BANNER COMPLETO */}
      <div
        className="relative h-[130px] flex items-center justify-end px-6 md:px-10"
       style={{
  backgroundImage: "url('/logo-navbar.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "auto 100%",// 🔥 CLAVE → reduce tamaño sin cortar
  backgroundColor: "#fdfcf8",
}}
      >
        {/* Overlay muy suave (puedes eliminarlo si quieres 0 transparencia) */}
        <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

        {/* MENÚ DESKTOP */}
        <div className="relative z-10 hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-gray-800">
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
            className="bg-[#4a6741] text-white px-5 py-2 rounded-md hover:bg-[#6b8f62] transition"
          >
            Reservar
          </a>
        </div>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-10 md:hidden text-2xl text-gray-800"
        >
          ☰
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#e0ddd6] p-6 flex flex-col gap-4 text-sm shadow-md">
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