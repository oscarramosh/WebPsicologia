export default function Sobre() {
  return (
    <section id="sobre" className="bg-[#f7f5f0] p-20 grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-4xl font-serif mb-4">
          Hola, soy <span className="italic text-green-700">Paulina</span>
        </h2>

        <p className="text-gray-600 mb-4">
          Psicóloga clínica con experiencia acompañando procesos de cambio
          emocional y crecimiento personal.
        </p>

        <ul className="text-gray-500 space-y-2 text-sm">
          <li>— Universidad de Chile</li>
          <li>— Terapia cognitivo conductual</li>
          <li>— +8 años experiencia</li>
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow">
          <p className="text-5xl font-serif text-green-700">8+</p>
          <p className="text-sm text-gray-500">años experiencia</p>
        </div>
      </div>
    </section>
  );
}