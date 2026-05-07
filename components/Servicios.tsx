export default function Servicios() {
  const servicios = [
    {
      icon: "🧠",
      title: "Psicoterapia Individual",
      desc: "Un espacio para comprender lo que te ocurre, ordenar lo que sientes y avanzar a tu propio ritmo.",
    },
    {
      icon: "💭",
      title: "Psicoterapia Infanto Juvenil",
      desc: "Acompañamiento especializado para niños y adolescentes que enfrentan ansiedad, desregulación emocional o dificultades en su entorno.",
    },
    {
      icon: "🌿",
      title: "Psicoterapia Adulto",
      desc: "Acompañamiento en procesos como pérdidas, separaciones, crisis personales o momentos difíciles de la vida.",
    },
  ];

  return (
    <section className="py-24 px-10 bg-[#fdfcf8]" id="servicios">
      
      {/* TÍTULO */}
      <div className="mb-12">
        
        {/* 🔥 MÁS GRANDE Y CON JERARQUÍA */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#2F3A3F] mb-3">
          Psicología Online - Puedo ayudarte
        </h2>

        {/* 🔥 TEXTO MEJORADO */}
        <p className="text-gray-500 max-w-xl">
          Acompañamiento terapéutico online, cercano y confidencial, orientado a tu bienestar emocional.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {servicios.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-[#e0ddd6] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            {/* ICONO */}
            <div className="w-12 h-12 rounded-lg bg-[#eef2ed] text-[#6b8f62] flex items-center justify-center text-2xl mb-6 transition hover:bg-[#e8ede6]">
              {s.icon}
            </div>

            {/* TITULO */}
            <h3 className="text-xl font-serif mb-3">
              {s.title}
            </h3>

            {/* DESCRIPCIÓN */}
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              {s.desc}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}