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
      {/* 🔥 CONTENEDOR */}
      <div className="relative w-full h-[120px] bg-[#fdfcf8] flex items-center justify-center overflow-hidden">

        {/* 🔥 FONDO SUAVE (rellena laterales) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/banner-navbar-final.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(6px)",
            opacity: 0.3,
          }}
        />

        {/* 🔥 IMAGEN COMPLETA (SIN CORTE) */}
        <img
          src="/banner-navbar-final.png"
          alt="La Ruta de una Psicóloga"
          className="relative z-10 h-full object-contain"
        />

        {/* 🔥 MENÚ */}
        <div className="absolute inset-0 flex items-center justify-end px-6 md:px-10 z-20">
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-gray-800">
            <a href="#servicios">Servicios</a>
            <a href="#sobre">Sobre mí</a>
            <a href="#investigacion">Investigación</a>
            <a className="bg-[#4a6741] text-white px-5 py-2 rounded-md">
              Reservar
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
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
          <a className="bg-[#4a6741] text-white px-4 py-2 rounded text-center">
            Reservar
          </a>
        </div>
      )}
    </nav>
  );
}