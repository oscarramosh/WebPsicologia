export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen pt-[68px]">

      <div className="bg-[#4a6741] text-white flex flex-col justify-center px-16 py-20">

        <p className="uppercase tracking-[0.2em] text-xs opacity-60 mb-6">
          Psicóloga Clínica · Santiago
        </p>

        <h1 className="text-5xl font-serif leading-tight mb-4">
          Un espacio para
          <span className="italic block">sanar y crecer</span>
        </h1>

        <p className="italic opacity-70 mb-6">
          Psicología clínica para adultos
        </p>

        <p className="max-w-md mb-10 opacity-80">
          Acompaño procesos terapéuticos con enfoque en bienestar emocional,
          autoconocimiento y desarrollo personal.
        </p>

        <div className="flex gap-4">
          <a href="#reserva" className="bg-white text-green-800 px-6 py-3 rounded">
            Reservar sesión
          </a>
          <a href="#servicios" className="border px-6 py-3 rounded">
            Ver servicios
          </a>
        </div>
      </div>

      <div className="bg-[#f7f5f0] flex flex-col items-center justify-center gap-6">

  {/* FOTO */}
  <div className="w-[300px] h-[380px] bg-green-200 rounded-2xl shadow-xl flex items-center justify-center">
    <span className="text-5xl font-serif text-white">P</span>
  </div>

  {/* INFO PROFESIONAL */}
  <div className="text-center text-sm text-gray-600 space-y-1">
    <p>Psicóloga Clínica </p>
    <p>+5 años de experiencia clínica</p>
    <p>Sesiones presenciales y online</p>
  </div>

</div>
    </section>
  );
}