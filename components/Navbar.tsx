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
      <div className="relative w-full h-[90px] md:h-[120px]">

        {/* 🔥 FONDO MOBILE MÁS CLARO */}
        <div className="absolute inset-0 bg-[#3E5C50] md:hidden"></div>

        {/* IMAGEN SOLO DESKTOP */}
        <img
          src="/banner-cropped.png"
          alt="La Ruta de una Psicóloga"
          className="hidden md:block w-full h-full"
        />

        {/* DIFUMINADO DESKTOP */}
        <div className="hidden md:block absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(47,58,63,0.25),transparent_70%)] pointer-events-none"></div>

        {/* CONTENIDO */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-10">

          {/* 🔥 TÍTULO MOBILE */}
          <div className="flex items-center gap-2 md:hidden text-white">

            {/* 🦋 ICONO */}
            <span className="text-xl">🦋</span>

            {/* TEXTO */}
            <span className="text-sm font-medium tracking-wide">
              La Ruta de una Psicóloga
            </span>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
            <a href="/#servicios">Servicios</a>
            <a href="/#sobre">Sobre mí</a>
            <a href="/#investigacion">Reflexiones</a>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-4xl text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col gap-5 text-base shadow-md">

          <a href="/#servicios" onClick={() => setOpen(false)}>
            Servicios
          </a>

          <a href="/#sobre" onClick={() => setOpen(false)}>
            Sobre mí
          </a>

          <a href="/#investigacion" onClick={() => setOpen(false)}>
            Reflexiones
          </a>

          <a
            href="/agenda"
            onClick={() => setOpen(false)}
            className="bg-[#3E5C50] text-white px-4 py-3 rounded-md text-center"
          >
            Reservar sesión
          </a>

        </div>
      )}
    </nav>
  );
}