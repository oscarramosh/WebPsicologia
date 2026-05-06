export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen pt-[68px]">

      {/* 🔵 COLUMNA IZQUIERDA */}
      <div className="bg-[#2F3A3F] text-white flex flex-col justify-center px-16 py-20">

        <p className="uppercase tracking-[0.2em] text-xs opacity-60 mb-6">
          Psicóloga Clínica · Santiago · Online
        </p>

        {/* H1 */}
        <h1 className="text-5xl font-serif leading-tight mb-4">
          Psicóloga online en Santiago, Chile
          <span className="italic block text-[#8A9A9D]">
            Ansiedad, depresión y bienestar emocional
          </span>
        </h1>

        {/* SUBTEXTO */}
        <p className="italic opacity-80 mb-6">
          Psicología clínica para adultos · Terapia online en Chile
        </p>

        {/* DESCRIPCIÓN */}
        <p className="max-w-md mb-10 opacity-90">
          Acompaño procesos terapéuticos en ansiedad, depresión y desarrollo personal,
          ofreciendo un espacio seguro, profesional y confidencial.
        </p>

        {/* BOTONES */}
        <div className="flex gap-4">
          <a
            href="#reserva"
            className="bg-[#3E5C50] text-white px-6 py-3 rounded-md hover:bg-[#2F3A3F] transition"
          >
            Reservar sesión
          </a>

          <a
            href="#servicios"
            className="border border-white/30 px-6 py-3 rounded-md hover:bg-white/10 transition"
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* ⚪ COLUMNA DERECHA */}
      <div className="bg-[#F7F5F0] flex flex-col items-center justify-center gap-6">

        {/* FOTO */}
        <div className="w-[300px] h-[380px] rounded-2xl shadow-xl overflow-hidden">
          <img
            src="/pauli.jpeg"
            alt="Psicóloga Paulina Hernández"
            className="w-full h-full object-cover"
          />
        </div>

        {/* INFO */}
        <div className="text-center text-sm text-[#5f6365] space-y-3 max-w-[300px]">

          <h2 className="text-3xl font-serif">
            Hola, soy <span className="italic text-[#3E5C50]">Paulina</span>
          </h2>

          <p className="leading-relaxed">
            Soy psicóloga clínica con experiencia en acompañar procesos de bienestar emocional,
            ansiedad y desarrollo personal. Trabajo desde una mirada cercana, ética y profesional.
          </p>

        </div>

      </div>
    </section>
  );
}