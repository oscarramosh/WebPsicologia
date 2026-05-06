export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen pt-[68px]">

      <div className="bg-[#6b8f62] text-white flex flex-col justify-center px-16 py-20">

        <p className="uppercase tracking-[0.2em] text-xs opacity-60 mb-6">
          Psicóloga Clínica · Santiago · Online
        </p>

        {/* 🔥 H1 OPTIMIZADO (CLAVE SEO) */}
        <h1 className="text-5xl font-serif leading-tight mb-4">
          Psicóloga online en Santiago, Chile
          <span className="italic block text-[#dfe7dc]">
            Ansiedad, depresión y bienestar emocional
          </span>
        </h1>

        {/* SUBTEXTO MEJORADO */}
        <p className="italic opacity-80 mb-6">
          Psicología clínica para adultos · Terapia online en Chile
        </p>

        {/* DESCRIPCIÓN MÁS SEO */}
        <p className="max-w-md mb-10 opacity-90">
          Acompaño procesos terapéuticos en ansiedad, depresión y desarrollo personal,
          ofreciendo un espacio seguro, profesional y confidencial.
        </p>

        <div className="flex gap-4">
          <a
            href="#reserva"
            className="bg-white text-[#4a6741] px-6 py-3 rounded-md hover:bg-[#f0f0f0] transition"
          >
            Reservar sesión
          </a>

          <a
            href="#servicios"
            className="border border-white/40 px-6 py-3 rounded-md hover:bg-white/10 transition"
          >
            Ver servicios
          </a>
        </div>
      </div>

      <div className="bg-[#f7f5f0] flex flex-col items-center justify-center gap-6">

        {/* FOTO */}
        <div className="w-[300px] h-[380px] rounded-2xl shadow-xl overflow-hidden">
  <img
    src="/pauli.jpeg"
    alt="Psicóloga Paulina Hernández"
    className="w-full h-full object-cover"
  />
</div>

        {/* INFO PROFESIONAL */}
      {/* INFO PROFESIONAL */}
<div className="text-center text-sm text-gray-600 space-y-2 max-w-[300px]">
  <p>
    {/* 👇 pega aquí el texto de Sobre.tsx */}
    Soy psicóloga clínica con experiencia en acompañar procesos de bienestar emocional, 
    ansiedad y desarrollo personal. Trabajo desde una mirada cercana, ética y profesional.
  </p>
</div>

      </div>
    </section>
  );
}