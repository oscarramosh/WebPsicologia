export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 min-h-[80vh] pt-[120px]">

      {/* IZQUIERDA */}
      <div className="relative flex flex-col justify-center px-10 md:px-16 py-12 text-white">

        {/* FONDO SUAVE */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2F3A3F]/85 to-[#2F3A3F]"></div>

        <div className="relative z-10 max-w-lg">

          <p className="uppercase tracking-[0.25em] text-xs opacity-60 mb-4">
            Psicóloga Clínica · Chile · Online
          </p>

          <h1 className="text-3xl md:text-4xl font-serif leading-snug mb-4">
            Acompañamiento psicológico para
            <span className="italic block text-[#8A9A9D] text-[0.95em]">
              ansiedad, depresión y procesos personales
            </span>
          </h1>

          <p className="mb-6 text-sm md:text-[15px] opacity-90">
            Un espacio terapéutico profesional, cercano y confidencial,
            donde puedes comprender lo que te ocurre y avanzar a tu propio ritmo.
          </p>

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

        </div>
      </div>

      {/* DERECHA */}
      <div className="bg-[#F7F5F0] flex flex-col items-center justify-center gap-5 px-6 py-12">

        {/* FOTO */}
        <div className="w-[260px] h-[340px] rounded-2xl shadow-xl overflow-hidden">
          <img
            src="/pauli.jpeg"
            alt="Psicóloga Paulina Hernández"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXTO */}
        <div className="text-center text-[13px] text-gray-600 space-y-2 max-w-[300px]">

          <h2 className="text-xl font-serif">
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