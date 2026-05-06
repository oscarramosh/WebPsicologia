"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // ocultar al bajar
      if (currentScroll > lastScroll && currentScroll > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      // fondo al hacer scroll
      setScrolled(currentScroll > 20);

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="font-serif text-lg text-[#2F3A3F]">
          La Ruta
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">

          <a href="#servicios" className="hover:text-[#3E5C50] transition">
            Servicios
          </a>

          <a href="#sobre" className="hover:text-[#3E5C50] transition">
            Sobre mí
          </a>

          <a href="#faq" className="hover:text-[#3E5C50] transition">
            Preguntas
          </a>

          {/* CTA */}
          <a
            href="#reserva"
            className="bg-[#3E5C50] text-white px-5 py-2 rounded-md hover:bg-[#2F3A3F] transition"
          >
            Reservar
          </a>

        </div>

        {/* MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col gap-4 text-sm shadow-md">

          <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#sobre" onClick={() => setOpen(false)}>Sobre mí</a>
          <a href="#faq" onClick={() => setOpen(false)}>Preguntas</a>

          <a
            href="#reserva"
            onClick={() => setOpen(false)}
            className="bg-[#3E5C50] text-white px-4 py-2 rounded text-center"
          >
            Reservar sesión
          </a>

        </div>
      )}
    </nav>
  );
}