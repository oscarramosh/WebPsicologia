export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen pt-[68px]">

      {/* TEXTO */}
      <div className="bg-[#f3f7f2] text-[#2c2c2a] flex flex-col justify-center px-16 py-20">

        <p className="uppercase tracking-[0.2em] text-xs text-[#6b8f62] mb-6">
          Psicóloga Clínica · Santiago · Online
        </p>

        {/* 🔥 H1 SEO (CLAVE) */}
        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
          Psicóloga online en Santiago, Chile
          <span className="italic block text-[#6b8f62]">
            Ansiedad, depresión y bienestar emocional
          </span>
        </h1>

        {/* SUBTEXTO */}
        <p className="max-w-md mb-10 text-gray-600 leading-relaxed">
          Acompaño procesos terapéuticos con enfoque en bienestar emocional,
          autoconocimiento y desarrollo personal en un espacio seguro y confidencial.
        </p>

        {/* BOTONES */}
        <div className="flex gap-4">
          <a
            href="#reserva"
            className="bg-[#4a6741] text-white px-6 py-3 rounded-md hover:bg-[#6b8f62] transition"
          >
            Agendar sesión
          </a>

          <a
            href="#servicios"
            className="border border-[#4a6741] text-[#4a6741] px-6 py-3 rounded-md hover:bg-[#f3f7f2] transition"
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* FOTO */}
      <div className="bg-[#f7f5f0] flex flex-col items-center justify-center gap-6">

        <div className="w-[300px] h-[380px] bg-[#dfe8dc] rounded-2xl shadow-xl flex items-center justify-center">
          <span className="text-5xl font-serif text-[#4a6741]">P</span>
        </div>

        <div className="text-center text-sm text-gray-600 space-y-1">
          <p>Psicóloga Clínica</p>
          <p>+5 años de experiencia</p>
          <p>Sesiones online</p>
        </div>

      </div>
    </section>
  );
}