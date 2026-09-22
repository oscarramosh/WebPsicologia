"use client";

import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

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

        {/* CANAL DE YOUTUBE */}
        <a
          href="https://youtube.com/@larutadeunapsicologa"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white border border-[#e5e3dc] rounded-full px-5 py-2.5 mb-8 text-sm text-gray-700 shadow-sm hover:shadow-md hover:border-red-200 transition"
        >
          <FaYoutube className="text-red-600 text-lg" />
          <span>Míranos en YouTube</span>
        </a>

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