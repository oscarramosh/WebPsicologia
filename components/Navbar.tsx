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
      {/* 🔥 ALTURA RESPONSIVE */}
      <div className="relative w-full h-[80px] md:h-[120px]">

        {/* IMAGEN */}
        <img
          src="/banner-cropped.png"
          alt="La Ruta de una Psicóloga"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/10"></div>

        {/* MENÚ */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-10">

          {/* LOGO TEXTO OPCIONAL (mobile mejora UX) */}
          <div className="md:hidden text-sm text-white font-medium">
            Paulina
          </div>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-white">
            <a href="/#servicios">Servicios</a>
            <a href="/#sobre">Sobre mí</a>
            <a href="/#investigacion">Reflexiones</a>
          </div>

          {/* BOTÓN MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg p-6 flex flex-col gap-5 text-sm">

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