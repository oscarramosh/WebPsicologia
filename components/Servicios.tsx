export default function Servicios() {
  const servicios = [
    {
      icon: "🧠",
      title: "Psicoterapia Individual",
      desc: "Proceso terapéutico personalizado para trabajar ansiedad, depresión y bienestar emocional.",
      tag: "Presencial · Online",
    },
    {
      icon: "💭",
      title: "Psicoterapia Infanto Juvenil",
      desc: "Intervención especializada en ansiedad, ataques de pánico y estrés.",
      tag: "Programa estructurado",
    },
    {
      icon: "🌿",
      title: "Psicoterapia Adulto",
      desc: "Acompañamiento en pérdidas, separaciones y procesos difíciles.",
      tag: "Contención emocional",
    },
    
    
   
  ];

  return (
    <section className="py-24 px-10 bg-[#fdfcf8]" id="servicios">
      
      {/* TÍTULO */}
      <div className="mb-12">
        <p className="uppercase text-xs tracking-[0.2em] text-green-700 mb-2">
          Psicología Online
        </p>

  

        <p className="text-gray-500 max-w-xl">
          Un espacio terapéutico seguro, confidencial y adaptado a tus necesidades.
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

            {/* TAG */}
            <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full">
              {s.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}