"use client";

import { useState } from "react";
import { posts } from "../lib/posts";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0); // uno abierto por defecto

  return (
    <section className="py-32 px-6 md:px-10 bg-[#f7f5f0]">

      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="mb-20 text-center">
          <p className="uppercase text-xs tracking-[0.3em] text-[#6b8f62] mb-4">
            Preguntas frecuentes
          </p>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            Un espacio para comprenderte
          </h2>

          <p className="text-gray-500 leading-relaxed">
            A veces no sabemos por dónde empezar. Estas preguntas pueden ayudarte a dar ese primer paso.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-10">

          {posts.map((post, index) => {
            const isOpen = open === index;

            return (
              <div key={post.slug} className="group">

                {/* PREGUNTA */}
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full text-left"
                >
                  <div className="flex items-start gap-4">

                    {/* LÍNEA VISUAL */}
                    <div
                      className={`w-[2px] mt-2 transition-all ${
                        isOpen ? "h-16 bg-[#6b8f62]" : "h-6 bg-gray-300"
                      }`}
                    />

                    <div>
                      <h3 className="font-serif text-xl md:text-2xl leading-snug">
                        {post.title}
                      </h3>
                    </div>

                  </div>
                </button>

                {/* RESPUESTA */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[600px] mt-6" : "max-h-0"
                  }`}
                >
                  <div className="pl-6 ml-[2px] text-gray-600 leading-relaxed space-y-5 text-[17px]">

                    {post.content.split("\n").map((line, i) => {
                      if (line.trim() === "") return null;

                      return <p key={i}>{line}</p>;
                    })}

                    {/* CTA INTEGRADO */}
                    <div className="pt-4">
                      <a
                        href="/#reserva"
                        className="text-[#6b8f62] underline text-sm hover:opacity-70 transition"
                      >
                        Agendar una primera conversación →
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