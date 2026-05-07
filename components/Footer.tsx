"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f4f2ec] border-t border-[#e0ddd6] mt-20">
      
      <div className="max-w-5xl mx-auto px-10 py-12 text-center">

        {/* NAVEGACIÓN */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 mb-8">

          <Link
            href="#servicios"
            className="hover:text-[#6b8f62] transition"
          >
            Servicios
          </Link>

          <Link
            href="#sobre"
            className="hover:text-[#6b8f62] transition"
          >
            Sobre mí
          </Link>

          <Link
            href="/blog"
            className="hover:text-[#6b8f62] transition"
          >
            Blog
          </Link>

          {/* 🔥 CORREGIDO */}
          <Link
            href="/agenda"
            className="hover:text-[#6b8f62] transition"
          >
            Agenda
          </Link>

        </nav>

        {/* LÍNEA DECORATIVA */}
        <div className="w-16 h-[1px] bg-[#6b8f62] mx-auto mb-6 opacity-40" />

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-400 tracking-wide">
          © {new Date().getFullYear()} Psicóloga Paulina Hernández
        </p>

      </div>
    </footer>
  );
}