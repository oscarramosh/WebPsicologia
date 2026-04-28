"use client";

import FadeIn from "./FadeIn";

export default function Camino() {
  const steps = [
    {
      title: "Confusión",
      text: "Momentos donde todo parece incierto y cuesta entender lo que sientes.",
    },
    {
      title: "Ansiedad",
      text: "Pensamientos que no se detienen, sensación de inquietud constante.",
    },
    {
      title: "Comprensión",
      text: "Empiezas a entender lo que te pasa y a mirarte con más claridad.",
    },
    {
      title: "Cambio",
      text: "Construyes herramientas y una nueva forma de vivir tu vida.",
    },
  ];

  return (
    <section className="py-24 bg-[#f7f5f0] text-center">
      {/* Título */}
      <FadeIn>
        <h2 className="text-4xl font-serif mb-4">
          Tu proceso tiene un camino
        </h2>
      </FadeIn>

      <FadeIn>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          Cada persona vive su proceso de manera única, pero hay etapas que se repiten.
          Comprenderlas es el primer paso hacia el cambio.
        </p>
      </FadeIn>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6 px-10">
        {steps.map((step, index) => (
          <FadeIn key={step.title}>
            <div className="p-6 border rounded-xl bg-white hover:shadow-md transition duration-300">
              
              {/* Número / progreso */}
              <div className="text-sm text-green-700 mb-2">
                Paso {index + 1}
              </div>

              {/* Título */}
              <h3 className="font-serif text-xl mb-3">
                {step.title}
              </h3>

              {/* Texto */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}