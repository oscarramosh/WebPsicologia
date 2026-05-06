export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen pt-[68px]">

      {/* IZQUIERDA */}
      <div className="bg-[#2F3A3F] text-white flex flex-col justify-center px-10 md:px-16 py-16">

        <p className="uppercase tracking-[0.25em] text-xs opacity-60 mb-5">
          Psicóloga Clínica · Chile · Online
        </p>

        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-5">
          Acompañamiento psicológico para
          <span className="italic block text-[#8A9A9D]">
            ansiedad, depresión y procesos personales
          </span>
        </h1>

        <p className="max-w-md mb-6 text-sm md:text-base opacity-90">
          Un espacio terapéutico profesional, cercano y confidencial,
          donde puedes comprender lo que te ocurre y avanzar a tu propio ritmo.
        </p>

        {/* 🔥 CTA FUERTE */}
        <div className="flex flex-col sm:flex-row gap-4">

          <a
            href="#reserva"
            className="bg-[#3E5C50] text-white px-6 py-3 rounded-md text-sm tracking-wide hover:bg-[#2F3A3F] transition"
          >
            Reservar primera sesión
          </a>

          <a
            href="#servicios"
            className="border border-white/30 px-6 py-3 rounded-md text-sm hover:bg-white/10 transition"
          >
            Ver servicios
          </a>

        </div>

        {/* 🔥 MICROCOPY (MUY IMPORTANTE) */}
        <p className="text-xs opacity-60 mt-4">
          Primera sesión online · Confidencial · Respuesta en menos de 24h
        </p>

      </div>

      {/* DERECHA */}
      <div className="bg-[#F7F5F0] flex flex-col items-center justify-center gap-6 px-6">

        <div className="w-[280px] h-[360px] rounded-2xl shadow-xl overflow-hidden">
          <img
            src="/pauli.jpeg"
            alt="Psicóloga Paulina Hernández"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center text-sm text-gray-600 space-y-3 max-w-[300px]">

          <h2 className="text-2xl font-serif">
            Hola, soy <span className="italic text-[#3E5C50]">Paulina</span>
          </h2>

          <p className="leading-relaxed">
            Psicóloga clínica enfocada en procesos de ansiedad,
            bienestar emocional y desarrollo personal.
          </p>

        </div>

      </div>
    </section>
  );
}