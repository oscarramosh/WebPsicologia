"use client";

import { useState } from "react";
import { posts } from "../lib/posts";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 px-6 md:px-10 bg-[#fdfcf8]">

      {/* HEADER */}
      <div className="max-w-3xl mb-16">
        <p className="uppercase text-xs tracking-[0.2em] text-[#6b8f62] mb-3">
          Preguntas frecuentes
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-4">
          Un espacio para comprender
        </h2>

        <p className="text-gray-500">
          Respuestas a dudas comunes sobre terapia, emociones y bienestar.
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto space-y-4">

        {posts.map((post, index) => (
          <div
            key={post.slug}
            className="border border-[#e5e3dc] rounded-xl bg-white overflow-hidden transition"
          >
            {/* PREGUNTA */}
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left p-6 flex justify-between items-center"
            >
              <span className="font-serif text-lg">
                {post.title}
              </span>

              <span className="text-[#6b8f62] text-xl">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {/* RESPUESTA */}
            <div
              className={`transition-all duration-300 ${
                open === index ? "max-h-[500px] p-6 pt-0" : "max-h-0 overflow-hidden"
              }`}
            >
              <div className="text-gray-600 leading-relaxed space-y-3">
                {post.content.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}