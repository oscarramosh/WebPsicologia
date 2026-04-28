"use client";

export default function Testimonios() {
  return (
    <section className="bg-[#f7f5f0] py-28 px-6 md:px-10">

      {/* HEADER */}
      <div className="text-center mb-20">
        <p className="uppercase text-xs tracking-[0.2em] text-[#6b8f62] mb-3">
          Experiencias
        </p>

        <h2 className="text-4xl md:text-5xl font-serif">
          Historias de transformación
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* CARD */}
        <div className="bg-white p-8 rounded-2xl border border-[#e5e3dc] shadow-sm hover:shadow-md transition">

          {/* ESTRELLAS */}
          <div className="flex gap-1 mb-6 text-[#6b8f62] text-lg">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* TEXTO */}
          <p className="text-gray-600 leading-relaxed mb-6">
            “Desde la primera sesión sentí un espacio seguro. 
            Hoy puedo entenderme mejor y tomar decisiones con más claridad.”
          </p>

          {/* FOOTER */}
          <div className="text-sm text-gray-400">
            Paciente · Ansiedad
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white p-8 rounded-2xl border border-[#e5e3dc] shadow-sm hover:shadow-md transition">

          <div className="flex gap-1 mb-6 text-[#6b8f62] text-lg">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            “Un proceso muy humano y cercano. Me ayudó a ordenar mis pensamientos 
            y enfrentar momentos difíciles con más herramientas.”
          </p>

          <div className="text-sm text-gray-400">
            Paciente · Proceso personal
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white p-8 rounded-2xl border border-[#e5e3dc] shadow-sm hover:shadow-md transition">

          <div className="flex gap-1 mb-6 text-[#6b8f62] text-lg">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            “Un espacio que invita a reflexionar y sanar. 
            Recomiendo completamente este acompañamiento.”
          </p>

          <div className="text-sm text-gray-400">
            Paciente · Desarrollo personal
          </div>
        </div>

      </div>

    </section>
  );
}