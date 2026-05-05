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
      <div
        className="relative flex items-center justify-end px-6 md:px-10"
        style={{
          backgroundImage: "url('/logo-navbar.jpg')",
          backgroundSize: "100% 100%",   // estira para llenar exacto sin recortar
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          aspectRatio: "auto",            // respeta proporción original
          height: "clamp(80px, 12vw, 160px)", // alto dinámico según ancho pantalla
        }}
      >
        {/* MENÚ DESKTOP */}
        <div className="relative z-10 hidden md:flex items-center gap-8 text-xs uppercase tracking-wi