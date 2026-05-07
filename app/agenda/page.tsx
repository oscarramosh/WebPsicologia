"use client";

import Link from "next/link";

export default function Agenda() {
  return (
    <section className="bg-[#fdfcf8] min-h-screen py-24 px-6 md:px-10">

      <div className="max-w-4xl mx-auto">

        {/* 🔙 VOLVER */}
        <div className="mb-6">
          <Link
  href="/"
  className="fixed top-6 left-6 z-50 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm text-[#4a6741] shadow-md hover:shadow-lg transition"
>
  ← Volver
</Link>
        </div>

        {/* HEADER */}
        <div className="mb-12">
          <p className="uppercase text-xs tracking-[0.2em] text-[#6b8f62] mb-3">
            Agenda tu sesión
          </p>

          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Elige un horario disponible
          </h1>

          <p className="text-gray-500 max-w-xl">
            Selecciona el día y la hora que mejor se adapten a ti.
            El proceso es simple, confidencial y sin compromiso.
          </p>
        </div>

        {/* CALENDARIO */}
        <div className="bg-white border border-[#e5e3dc] rounded-2xl overflow-hidden shadow-sm">

          <div className="h-[750px]">
            <iframe
              src="https://calendly.com/psicologa-paulinahernandez/50min?background_color=fdfcf8&text_color=4a4a4a&primary_color=4a6741"
              width="100%"
              height="100%"
              className="border-0"
            />
          </div>

        </div>

      </div>
    </section>
  );
}