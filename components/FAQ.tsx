"use client";

import { useState } from "react";
import { posts } from "../lib/posts";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-36 px-6 md:px-10 bg-[#f7f5f0] overflow-hidden">

      {/* FONDO SUAVE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#4a6741_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-3xl mx-auto relative">

        {/* HEADER */}
        <div className="mb-24 text-center">
          <p className="uppercase text-[10px] tracking-[0.35em] text-[#6b8f62] mb-5">
            Espacio terapéutico
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-[1.2] mb-6">
            Preguntas que suelen aparecer
          </h2>

          <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
            A veces no es fácil poner en palabras lo que sentimos.  
            Este espacio busca acompañarte en ese primer acercamiento.
          </p>
        </div>

        {/* LISTA */}
        <div className="space-y-14">

          {posts.map((post, index) => {
            const isOpen = open === index;

            return (
              <div key={post.slug} className="group">

                {/* PREGUNTA */}
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full text-left"
                >
                  <div className="flex items-start gap-5">

                    {/* LÍNEA */}
                    <div
                      className={`transition-all duration-500 ${
                        isOpen
                          ? "h-20 w-[2px] bg-[#6b8f62]"
                          : "h-8 w-[2px] bg-gray-300"
                      }`}
                    />

                    {/* TEXTO */}
                    <h3 className="font-serif text-2xl md:text-3xl leading-snug tracking-tight">
                      {post.title}
                    </h3>
                  </div>
                </button>

                {/* RESPUESTA */}
                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[700px] mt-8" : "max-h-0"
                  }`}
                >
                  <div className="pl-7 ml-[2px] text-gray-600 leading-relaxed space-y-6 text-[17px]">

                    {post.content.split("\n").map((line, i) => {
                      if (line.trim() === "") return null;

                      return <p key={i}>{line}</p>;
                    })}

                    {/* CTA SUAVE */}
                    <div className="pt-6">
                      <a
                        href="/#reserva"
                        className="text-[#6b8f62] text-sm tracking-wide hover:opacity-70 transition"
                      >
                        Iniciar proceso terapéutico →
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}