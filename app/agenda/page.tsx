"use client";

import Link from "next/link";

export default function Agenda() {
  return (
    <section className="bg-[#fdfcf8] min-h-screen py-24 px-6 md:px-10">

      <div className="max-w-4xl mx-auto">

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

          {/* 💰 PRECIO */}
<div className="mt-6 inline-block bg-white border border-[#e5e3dc] px-6 py-3 rounded-lg shadow-sm">
  <p className="text-sm text-gray-500">
    Valor por sesión
  </p>
  <p className="text-xl font-serif text-[#2F3A3F]">
    $30.000 CLP
  </p>
</div>
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

        {/* 🔙 VOLVER (AHORA ABAJO Y VISIBLE) */}
      <div className="mt-10 text-center">
  <Link
    href="/"
    className="inline-block bg-[#3E5C50] text-white px-6 py-3 rounded-md text-sm tracking-wide hover:bg-[#2F3A3F] transition"
  >
    ← Volver al inicio
  </Link>
</div>

      </div>
    </section>
  );
}