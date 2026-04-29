"use client";

import { useState } from "react";
import { posts } from "../lib/posts";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-10 bg-[#f7f5f0]">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="mb-20">
          <p className="uppercase text-xs tracking-[0.25em] text-[#6b8f62] mb-4">
            Preguntas frecuentes
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Un espacio para entender lo que estás viviendo
          </h2>

          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Muchas veces, poner en palabras lo que nos ocurre es el primer paso para comenzar a sanar.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">

          {posts.map((post, index) => {
            const isOpen = open === index;

            return (
              <div
                key={post.slug}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-[#dcd8cf] shadow-md"
                    : "bg-white/70 border-[#e5e3dc]"
                }`}
              >

                {/* PREGUNTA */}
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-serif text-lg md:text-xl">
                    {post.title}
                  </span>

                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full border transition ${
                      isOpen
                        ? "bg-[#6b8f62] text-white border-[#6b8f62]"
                        : "text-gray-400 border-gray-300"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                {/* RESPUESTA */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed space-y-4">

                      {post.content.split("\n").map((line, i) => {
                        if (line.trim() === "") return null;

                        return <p key={i}>{line}</p>;
                      })}

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